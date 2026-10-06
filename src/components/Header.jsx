import { profile } from "../data/profile";

export default function Header({ sound, onToggleSound }) {
  return (
    <header className="site-header">
      <a href="#top" className="brand">
        {profile.name}
      </a>
      <button
        className="sound-toggle"
        onClick={onToggleSound}
        aria-pressed={sound}
      >
        Sound: {sound ? "on" : "off"}
      </button>
    </header>
  );
}
