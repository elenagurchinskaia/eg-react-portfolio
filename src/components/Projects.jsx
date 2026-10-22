import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import DistortImage from "./DistortImage";

function ProjectCard({ project, index }) {
  const ref = useReveal();
  return (
    <article className="project reveal" ref={ref}>
      <a
        className="project-media"
        href={project.live || project.code}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        style={project.aspect ? { aspectRatio: project.aspect } : undefined}
      >
        <DistortImage src={project.image} />
      </a>
      <div className="project-body">
        <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
        <h3>{project.name}</h3>
        {project.status && <p className="project-status">{project.status}</p>}
        <p>{project.summary}</p>
        <ul className="tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            Source <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <h2 className="section-title">Selected work</h2>
      <div className="projects">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
