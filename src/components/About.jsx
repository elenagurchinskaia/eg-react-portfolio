import { profile } from "../data/profile";
import MusicCard from "./MusicCard";
import avatar from "../assets/images/avatar-2026.jpg";

export default function About({ onMusic }) {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about">
        <img src={avatar} alt={`Portrait of ${profile.name}`} loading="lazy" />
        <div>
          <div className="bio">
            {profile.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <MusicCard onPlay={onMusic} />
        </div>
      </div>
    </section>
  );
}
