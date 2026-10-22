import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">
        {profile.name} · {profile.role}
      </p>
      <h1>
        {profile.headline.split(/(full-stack)/).map((part, i) =>
          part === "full-stack" ? (
            <span className="nowrap" key={i}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h1>
      <p className="lede">{profile.intro}</p>
      <div className="hero-actions">
        <a className="btn" href="#work">
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
    </section>
  );
}
