import { profile } from "../data/profile";
import { sfx } from "../utils/sound";

export default function Hero({ sections, onOpen }) {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">
        {profile.role} <span aria-hidden="true">/ design-minded</span>
      </p>
      <h1>{profile.headline}</h1>
      <p className="lede">{profile.intro}</p>
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
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={sfx.hover}
            >
              <span className="menu-index">↗</span>Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
