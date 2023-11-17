// ----------- IMPORTS ----------- //

import Project from "../components/Project";
import "../styles/Portfolio.css";
import projectImg1 from "../assets/images/project-01_.png";
import projectImg2 from "../assets/images/project-02_.png";
import projectImg3 from "../assets/images/project-03.png";
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
            name={"SASQUEST"}
            // description={"This is my third project"}
            image={projectImg3}
            deployedLink={"https://sasquest-52c8b076a68a.herokuapp.com/"}
            githubLink={"https://github.com/laineycreighton/sasquest"}
          />
        </div>
        <div className="col-md-4 mb-2">
          <Project
            name={"Weather Dashboard"}
            // description={"This is my fourth project"}
            image={projectImg4}
            deployedLink={
              "https://elenagurchinskaia.github.io/weather-dashboard/"
            }
            githubLink={
              "https://github.com/elenagurchinskaia/weather-dashboard"
            }
          />
        </div>
        {/* <div className="col-md-4 mb-2">
          <Project
            name={"Book Search Engine"}
            // description={"This is my fifth project"}
            image={projectImg5}
            deployedLink={
              "https://elena-book-search-01a02c50dd0b.herokuapp.com/"
            }
            githubLink={
              "https://github.com/elenagurchinskaia/book-search-engine"
            }
          />
        </div> */}
        <div className="col-md-4 mb-2">
          <Project
            name={"Note Taker"}
            // description={"This is my sixth project"}
            image={projectImg6}
            deployedLink={"https://eg-note-taker-fd686ed98563.herokuapp.com/"}
            githubLink={
              "https://github.com/elenagurchinskaia/express-note-taker"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
