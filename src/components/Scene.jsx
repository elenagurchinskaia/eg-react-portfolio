import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertex = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uEnergy;
  uniform float uSize;
  uniform float uForce;
  attribute vec3 aSeed;
  varying float vMix;

  void main() {
    vec3 p = position;
    float t = uTime * 0.15;
    // layered sine flow field
    p.x += sin(t + p.y * 0.9 + aSeed.x * 6.28) * (0.35 + uEnergy * 0.5);
    p.y += cos(t * 1.2 + p.x * 0.8 + aSeed.y * 6.28) * (0.35 + uEnergy * 0.5);
    p.z += sin(t * 0.8 + p.x * 0.6 + p.y * 0.6) * 0.5;

    // cursor repulsion
    vec2 d = p.xy - uMouse * vec2(6.0, 3.6);
    float dist = length(d);
    float push = smoothstep(2.6, 0.0, dist);
    p.xy += normalize(d + 0.0001) * push * 0.9 * uForce;
    p.z += push * 0.8 * uForce;

    vMix = clamp(push + aSeed.z * 0.5 + uEnergy * 0.3, 0.0, 1.0);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = uSize * (1.0 + push * 1.5) * (6.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragment = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;
  varying float vMix;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, r);
    gl_FragColor = vec4(mix(uColorA, uColorB, vMix), alpha * uOpacity);
  }
`;

export default function Scene({
  energy = 0,
  theme = "dark",
  params = { speed: 1, force: 1, size: 4 },
}) {
  const mountRef = useRef(null);
  const energyRef = useRef(energy);
  const paramsRef = useRef(params);
  const sceneRef = useRef(null);

  useEffect(() => {
    energyRef.current = energy;
  }, [energy]);

  useEffect(() => {
    paramsRef.current = params;
    const s = sceneRef.current;
    if (s) {
      s.uniforms.uForce.value = params.force;
      s.uniforms.uSize.value = params.size * (window.innerWidth < 700 ? 1.25 : 1);
    }
  }, [params]);

  // recolor from the active theme's CSS variables
  useEffect(() => {
    const s = sceneRef.current;
    if (!s) return;
    const css = getComputedStyle(document.documentElement);
    s.uniforms.uColorA.value.set(css.getPropertyValue("--particle").trim());
    s.uniforms.uColorB.value.set(css.getPropertyValue("--accent").trim());
    // additive glow vanishes on light backgrounds
    s.material.blending =
      theme === "light" ? THREE.NormalBlending : THREE.AdditiveBlending;
    s.material.needsUpdate = true;
  }, [theme]);

  useEffect(() => {
    const mount = mountRef.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    } catch {
      return; // no WebGL: CSS gradient fallback stays visible
    }
    const small = window.innerWidth < 700;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    );
    camera.position.z = 6;

    const count = small ? 1500 : 4000;
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      seeds[i * 3] = Math.random();
      seeds[i * 3 + 1] = Math.random();
      seeds[i * 3 + 2] = Math.random();
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 3));

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(10, 10) },
      uEnergy: { value: 0 },
      uSize: { value: paramsRef.current.size * (small ? 1.25 : 1) },
      uOpacity: { value: 0.4 },
      uForce: { value: paramsRef.current.force },
      uColorA: { value: new THREE.Color("#5b5b73") },
      uColorB: { value: new THREE.Color("#c6ff3d") },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    scene.add(new THREE.Points(geometry, material));
    sceneRef.current = { uniforms, material };
    {
      const css = getComputedStyle(document.documentElement);
      uniforms.uColorA.value.set(css.getPropertyValue("--particle").trim());
      uniforms.uColorB.value.set(css.getPropertyValue("--accent").trim());
      material.blending =
        document.documentElement.dataset.theme === "light"
          ? THREE.NormalBlending
          : THREE.AdditiveBlending;
    }

    const target = new THREE.Vector2(10, 10);
    const onMove = (e) => {
      const p = e.touches ? e.touches[0] : e;
      target.set(
        (p.clientX / window.innerWidth) * 2 - 1,
        -((p.clientY / window.innerHeight) * 2 - 1)
      );
    };
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("resize", onResize);

    let raf;
    let running = true;
    const clock = new THREE.Clock();
    const tick = () => {
      if (!running) return;
      raf = requestAnimationFrame(tick);
      uniforms.uTime.value +=
        clock.getDelta() * (reduced ? 0.15 : paramsRef.current.speed);
      uniforms.uMouse.value.lerp(reduced ? new THREE.Vector2(10, 10) : target, 0.06);
      uniforms.uEnergy.value +=
        (energyRef.current - uniforms.uEnergy.value) * 0.04;
      camera.position.x = uniforms.uMouse.value.x * 0.15;
      camera.position.y = uniforms.uMouse.value.y * 0.1;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    tick();

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        clock.getDelta();
        tick();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
      sceneRef.current = null;
    };
  }, []);

  return <div className="scene" ref={mountRef} aria-hidden="true" />;
}
