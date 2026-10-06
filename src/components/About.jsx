import { profile } from "../data/profile";
import avatar from "../assets/images/avatar.jpeg";

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about">
        <img src={avatar} alt={`Portrait of ${profile.name}`} loading="lazy" />
        <div>
          <p>{profile.intro}</p>
          <p>{profile.about}</p>
        </div>
      </div>
    </section>
  );
}
