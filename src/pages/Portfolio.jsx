import Project from "../components/Project";
import "../styles/Portfolio.css";
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
      <div className="row">
        <div className="col-md-4 mb-4">
          <Project
            name={"Upstream Travel"}
            // description={"This is my first project"}
            image={projectImg1}
            deployedLink={
              "https://elenagurchinskaia.github.io/upstream-travel/"
            }
            githubLink={"https://github.com/elenagurchinskaia/upstream-travel/"}
          />
        </div>
        <div className="col-md-4 mb-2">
          <Project
            name={"The Monkey's Cup"}
            // description={"This is my second project"}
            image={projectImg2}
            deployedLink={
              "https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/"
            }
            githubLink={"https://github.com/DSHowarth/Escape-Room-Storefront"}
          />
        </div>
        <div className="col-md-4 mb-2">
          <Project
            name={"Project #03"}
            // description={"This is my third project"}
            image={projectImg3}
            deployedLink={
              "https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/"
            }
            githubLink={"https://github.com/DSHowarth/Escape-Room-Storefront"}
          />
        </div>
        <div className="col-md-4 mb-2">
          <Project
            name={"Project #04"}
            // description={"This is my fourth project"}
            image={projectImg4}
            deployedLink={
              "https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/"
            }
            githubLink={"https://github.com/DSHowarth/Escape-Room-Storefront"}
          />
        </div>
        <div className="col-md-4 mb-2">
          <Project
            name={"Project #05"}
            // description={"This is my fifth project"}
            image={projectImg5}
            deployedLink={
              "https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/"
            }
            githubLink={"https://github.com/DSHowarth/Escape-Room-Storefront"}
          />
        </div>
        <div className="col-md-4 mb-2">
          <Project
            name={"Project #06"}
            // description={"This is my sixth project"}
            image={projectImg6}
            deployedLink={
              "https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/"
            }
            githubLink={"https://github.com/DSHowarth/Escape-Room-Storefront"}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
