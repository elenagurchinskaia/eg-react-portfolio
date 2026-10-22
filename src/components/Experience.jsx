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
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
              <p>{job.summary}</p>
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
