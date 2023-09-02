import Project from "../components/Project";
import "../styles/portfolio.css";
import projectImg1 from "../assets/images/project-01_.png";
import projectImg2 from "../assets/images/project-02_.png";
import projectImg3 from "../assets/images/project-03.jpg";
import projectImg4 from "../assets/images/project-04.jpg";
import projectImg5 from "../assets/images/project-05.jpg";
import projectImg6 from "../assets/images/project-06.jpg";

function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* <h1>Projects</h1> */}
      <div className="d-flex flex-wrap justify-content-between">
        <div className="flex-grow-1 col-md-4">
          <Project
            name={"Upstream Travel"}
            // description={"This is my first project"}
            image={projectImg1}
          />
        </div>
        <div className="flex-grow-1 col-md-4">
          <Project
            name={"The Monkey's Cup"}
            // description={"This is my second project"}
            image={projectImg2}
          />
        </div>
        <div className="flex-grow-1 col-md-4">
          <Project
            name={"Project #03"}
            // description={"This is my third project"}
            image={projectImg3}
          />
        </div>
        <div className="flex-grow-1 col-md-4">
          <Project
            name={"Project #04"}
            // description={"This is my fourth project"}
            image={projectImg4}
          />
        </div>
        <div className="flex-grow-1 col-md-4">
          <Project
            name={"Project #05"}
            // description={"This is my fifth project"}
            image={projectImg5}
          />
        </div>
        <div className="flex-grow-1 col-md-4">
          <Project
            name={"Project #06"}
            // description={"This is my sixth project"}
            image={projectImg6}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
