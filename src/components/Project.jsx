function Project({ name, description, image }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Project;
