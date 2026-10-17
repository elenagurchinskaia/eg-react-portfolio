import { skills } from "../data/profile";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Toolbox</h2>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
