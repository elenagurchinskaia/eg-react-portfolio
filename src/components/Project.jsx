function Project({ name, image, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={name} />
        <div className="project-overlay">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
