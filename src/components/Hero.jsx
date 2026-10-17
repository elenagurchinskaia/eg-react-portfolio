import { profile } from "../data/profile";
import { sfx } from "../utils/sound";

export default function Hero({ sections, onOpen }) {
  return (
    <section className="hero" id="top">
      <p className="availability">
        <span className="availability-dot" aria-hidden="true"></span>
        {profile.availability}
      </p>
      <p className="eyebrow">
        {profile.name} · {profile.role}
      </p>
      <h1>{profile.headline}</h1>
      <p className="lede">{profile.intro}</p>
      <ul className="chips hero-stack" aria-label="Key technologies">
        {profile.keyStack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="hero-actions">
        <a
          className="btn"
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            onOpen("work");
          }}
        >
          View my work
        </a>
        <a
          className="btn btn-ghost"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
        <a
          className="btn btn-ghost"
          href={`mailto:${profile.email}?subject=${encodeURIComponent(
            "Opportunity for Elena"
          )}`}
        >
          Email me
        </a>
      </div>
      <nav aria-label="Sections" className="menu">
        <ul>
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onOpen(s.id);
                }}
                onMouseEnter={sfx.hover}
              >
                <span className="menu-index">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
