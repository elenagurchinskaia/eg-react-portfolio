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
          <p>{profile.intro}</p>
          <p>{profile.about}</p>
          <MusicCard onPlay={onMusic} />
        </div>
      </div>
    </section>
  );
}
