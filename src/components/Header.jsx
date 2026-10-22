import { useState } from "react";
import { profile } from "../data/profile";
import { defaultParams } from "../hooks/useSceneParams";

// Shows the theme you will switch to: sun while dark, moon while light.
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const SlidersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
    <circle cx="15" cy="7" r="2" />
    <circle cx="9" cy="17" r="2" />
  </svg>
);
const SoundOnIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H3v6h3l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
  </svg>
);
const SoundOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 5 6 9H3v6h3l5 4z" />
    <path d="m16 9 5 6M21 9l-5 6" />
  </svg>
);

const controls = [
  { key: "speed", label: "Flow speed", min: 0, max: 3, step: 0.05 },
  { key: "force", label: "Cursor force", min: 0, max: 2.5, step: 0.05 },
  { key: "size", label: "Particle size", min: 1, max: 10, step: 0.5 },
];

export default function Header({
  sound,
  onToggleSound,
  theme,
  onTheme,
  params,
  onParams,
  solid,
}) {
  const [tuning, setTuning] = useState(false);

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <a href="#top" className="brand">
        {profile.name}
      </a>
      <div className="controls">
        <button
          className="icon-btn"
          onClick={() => onTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          className="icon-btn"
          onClick={() => setTuning((v) => !v)}
          aria-expanded={tuning}
          aria-controls="tune-panel"
          aria-label="Tune the background"
          title="Tune the background"
        >
          <SlidersIcon />
        </button>
        <button
          className="icon-btn"
          onClick={onToggleSound}
          aria-pressed={sound}
          aria-label="Sound"
          title={sound ? "Turn sound off" : "Turn sound on"}
        >
          {sound ? <SoundOnIcon /> : <SoundOffIcon />}
        </button>
        {tuning && (
          <div className="tune-panel" id="tune-panel">
            {controls.map((c) => (
              <label key={c.key}>
                {c.label} · {params[c.key]}
                <input
                  type="range"
                  min={c.min}
                  max={c.max}
                  step={c.step}
                  value={params[c.key]}
                  onChange={(e) =>
                    onParams({ ...params, [c.key]: Number(e.target.value) })
                  }
                />
              </label>
            ))}
            <button
              className="tune-reset"
              onClick={() => onParams({ ...defaultParams })}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
