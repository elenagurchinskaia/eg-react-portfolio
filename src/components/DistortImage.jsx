import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Cover-fit the texture (anchored to the top) and warp the UVs around the cursor.
const fragment = /* glsl */ `
  uniform sampler2D uTex;
  uniform vec2 uScale;
  uniform vec2 uMouse;
  uniform float uHover;
  uniform float uTime;
  uniform float uAspect;
  varying vec2 vUv;

  vec2 cover(vec2 uv) {
    return vec2(0.5 + (uv.x - 0.5) * uScale.x, 1.0 - (1.0 - uv.y) * uScale.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 d = uv - uMouse;
    d.x *= uAspect;
    float dist = length(d);
    float falloff = smoothstep(0.55, 0.0, dist);
    float wave = sin(dist * 28.0 - uTime * 4.0) * falloff * uHover;
    vec2 dir = normalize(d + 0.0001);
    vec2 offset = dir * wave * 0.022 + (uMouse - uv) * falloff * uHover * 0.08;
    float split = uHover * falloff * 0.012 + uHover * 0.002;
    float r = texture2D(uTex, cover(uv + offset + dir * split)).r;
    float g = texture2D(uTex, cover(uv + offset)).g;
    float b = texture2D(uTex, cover(uv + offset - dir * split)).b;
    gl_FragColor = linearToOutputTexel(vec4(r, g, b, 1.0));
  }
`;

export default function DistortImage({ src }) {
  const wrapRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Touch screens have no hover: they get a press-and-drag ripple, plus one
    // short automatic ripple when the image scrolls into view.
    const isTouch = window.matchMedia("(hover: none)").matches;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    } catch {
      return; // plain <img> fallback stays visible
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const canvas = renderer.domElement;
    wrap.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const uniforms = {
      uTex: { value: null },
      uScale: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uHover: { value: 0 },
      uTime: { value: 0 },
      uAspect: { value: 1.6 },
    };
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: vertex,
        fragmentShader: fragment,
      })
    );
    scene.add(mesh);

    let imgAspect = 1.6;
    const updateScale = () => {
      const planeAspect = uniforms.uAspect.value;
      // cover: shrink the sampled area along the axis that overflows
      uniforms.uScale.value.set(
        planeAspect > imgAspect ? 1 : planeAspect / imgAspect,
        planeAspect > imgAspect ? imgAspect / planeAspect : 1
      );
    };
    const resize = () => {
      const { width, height } = wrap.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      uniforms.uAspect.value = width / height;
      updateScale();
      draw();
    };

    let target = 0;
    let raf = 0;
    let disposed = false;
    const clock = new THREE.Clock();
    const draw = () => renderer.render(scene, camera);
    const loop = () => {
      uniforms.uTime.value += clock.getDelta();
      uniforms.uHover.value += (target - uniforms.uHover.value) * 0.08;
      draw();
      if (target > 0 || uniforms.uHover.value > 0.002) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
        uniforms.uHover.value = 0;
        draw();
      }
    };
    const start = () => {
      if (!raf && !disposed) {
        clock.getDelta();
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      uniforms.uMouse.value.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height
      );
    };
    const onEnter = (e) => {
      onMove(e); // start the ripple where the pointer or finger landed
      target = 1;
      start();
    };
    const onLeave = () => {
      target = 0;
      start();
    };
    // listen on the card so hovering the text side doesn't matter, only the image
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("pointermove", onMove);

    const observer = new ResizeObserver(resize);
    observer.observe(wrap);

    // Touch only: one gentle ripple from the centre the first time the image
    // is mostly on screen, so the effect is discoverable without a mouse.
    let pulseTimer = 0;
    let pulseObserver;
    if (isTouch && "IntersectionObserver" in window) {
      pulseObserver = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          pulseObserver.disconnect();
          uniforms.uMouse.value.set(0.5, 0.5);
          target = 1;
          start();
          pulseTimer = window.setTimeout(() => {
            target = 0;
            start();
          }, 1100);
        },
        { threshold: 0.6 }
      );
      pulseObserver.observe(wrap);
    }

    new THREE.TextureLoader().load(src, (tex) => {
      if (disposed) {
        tex.dispose();
        return;
      }
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      uniforms.uTex.value = tex;
      imgAspect = tex.image.width / tex.image.height;
      updateScale();
      resize();
      setReady(true);
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      pulseObserver?.disconnect();
      window.clearTimeout(pulseTimer);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("pointermove", onMove);
      uniforms.uTex.value?.dispose();
      mesh.geometry.dispose();
      mesh.material.dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, [src]);

  return (
    <div className={`distort ${ready ? "is-ready" : ""}`} ref={wrapRef}>
      <img src={src} alt="" loading="lazy" />
    </div>
  );
}
