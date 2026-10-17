import { useState } from "react";
import { profile } from "../data/profile";
import { themes } from "../hooks/useTheme";
import { defaultParams } from "../hooks/useSceneParams";

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
        <div className="theme-switch" role="radiogroup" aria-label="Theme">
          {themes.map((t) => (
            <button
              key={t.id}
              role="radio"
              aria-checked={theme === t.id}
              onClick={() => onTheme(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button
          className="sound-toggle"
          onClick={() => setTuning((v) => !v)}
          aria-expanded={tuning}
          aria-controls="tune-panel"
        >
          Tune
        </button>
        <button
          className="sound-toggle"
          onClick={onToggleSound}
          aria-pressed={sound}
        >
          Sound: {sound ? "on" : "off"}
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
