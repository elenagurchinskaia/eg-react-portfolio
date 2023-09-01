import Project from "../components/Project";
import projectImg1 from "../assets/images/project-01_.png";
import projectImg2 from "../assets/images/project-02_.png";
import projectImg3 from "../assets/images/project-03.jpg";
import projectImg4 from "../assets/images/project-04.jpg";
import projectImg5 from "../assets/images/project-05.jpg";
import projectImg6 from "../assets/images/project-06.jpg";

function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <Project
        name={"Upstream Travel"}
        description={"This is my first project"}
        image={projectImg1}
      />
      <Project
        name={"The Monkey's Cup"}
        description={"This is my second project"}
        image={projectImg2}
      />
      <Project
        name={"Project3"}
        description={"This is my third project"}
        image={projectImg3}
      />
      <Project
        name={"Project4"}
        description={"This is my fourth project"}
        image={projectImg4}
      />
      <Project
        name={"Project5"}
        description={"This is my fifth project"}
        image={projectImg5}
      />
      <Project
        name={"Project6"}
        description={"This is my sixth project"}
        image={projectImg6}
      />
    </div>
  );
}

export default Portfolio;
