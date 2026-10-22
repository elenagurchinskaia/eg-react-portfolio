import { experience } from "../data/experience";

export default function Experience() {
  if (!experience.length) return null;
  return (
    <section className="section" id="experience" aria-label="Experience">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li className="job" key={`${job.company}-${job.dates}`}>
            <p className="job-dates">{job.dates}</p>
            <div>
              <h3>
                {job.title} ·{" "}
                {job.url ? (
                  <a
                    className="company"
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="company">{job.company}</span>
                )}
              </h3>
              <p>{job.summary}</p>
              {job.clients?.length > 0 && (
                <>
                  <p className="clients-label">Selected client work</p>
                  <ul className="job-clients">
                  {job.clients.map((c) => (
                    <li key={c.name}>
                      <p className="client-name">
                        {c.name} <span>{c.dates}</span>
                      </p>
                      <p>{c.summary}</p>
                    </li>
                  ))}
                  </ul>
                </>
              )}
              {job.tags?.length > 0 && (
                <ul className="tags">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
