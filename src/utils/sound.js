// Tiny synthesized sound engine (Web Audio API). No audio files needed.
// Everything is silent until enable() is called from a user gesture.

let ctx = null;
let master = null;
let drone = null;
let enabled = false;

function ensure() {
  if (ctx) return true;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return false;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  return true;
}

function startDrone() {
  if (drone) return;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 400;
  const g = ctx.createGain();
  g.gain.value = 0.0;
  g.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 3);
  lp.connect(g).connect(master);
  const oscs = [110, 164.81, 220.5].map((f) => {
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    o.connect(lp);
    o.start();
    return o;
  });
  drone = { oscs, g };
}

export function enable() {
  if (!ensure()) return;
  ctx.resume();
  enabled = true;
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 0.4);
  startDrone();
}

export function disable() {
  enabled = false;
  if (!ctx) return;
  master.gain.cancelScheduledValues(ctx.currentTime);
  master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
}

export function isEnabled() {
  return enabled;
}

function blip(freq, duration = 0.12, peak = 0.12, type = "sine", delay = 0) {
  if (!enabled || !ctx) return;
  const t = ctx.currentTime + delay;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  o.connect(g).connect(master);
  o.start(t);
  o.stop(t + duration + 0.05);
}

export const sfx = {
  hover: () => blip(880, 0.08, 0.04),
  open: () => {
    blip(440, 0.3, 0.1);
    blip(660, 0.35, 0.08, "sine", 0.07);
    blip(880, 0.45, 0.06, "sine", 0.14);
  },
  close: () => {
    blip(660, 0.25, 0.08);
    blip(440, 0.35, 0.08, "sine", 0.08);
  },
};
