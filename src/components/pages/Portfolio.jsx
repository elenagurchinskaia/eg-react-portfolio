import Project from "../Project";

function Portfolio() {
  return (
    <div>
      <h1>Home</h1>
      <Project
        name={"Project1"}
        description={"This is my first project"}
        image={"../assets/images/project-01_.png"}
      />
      <Project
        name={"Project2"}
        description={"This is my second project"}
        image={"image1.jpg"}
      />
      <Project
        name={"Project3"}
        description={"This is my third project"}
        image={"image1.jpg"}
      />
      <Project
        name={"Project4"}
        description={"This is my fourth project"}
        image={"image1.jpg"}
      />
      <Project
        name={"Project5"}
        description={"This is my fifth project"}
        image={"image1.jpg"}
      />
      <Project
        name={"Project6"}
        description={"This is my sixth project"}
        image={"image1.jpg"}
      />
    </div>
  );
}

export default Portfolio;
