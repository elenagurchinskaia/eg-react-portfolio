function Project({ name, description, image }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={image} alt={name} className="img-fluid max-width-200" />
    </div>
  );
}

export default Project;
