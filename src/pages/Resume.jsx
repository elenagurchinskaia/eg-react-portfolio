// ----------- IMPORTS ----------- //

// CSS

import "../styles/Resume.css";

// Images

import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import git from "../assets/images/git.png";
import graphql from "../assets/images/graphql.png";
import heroku from "../assets/images/heroku.png";
import jquery from "../assets/images/jquery.png";
import jwt from "../assets/images/jwt.png";
import mongodb from "../assets/images/mongodb.png";
import mysql from "../assets/images/mysql.png";
import netlify from "../assets/images/netlify.png";
import postman from "../assets/images/postman.png";
import sequelize from "../assets/images/sequelize.png";

// ----------- EXPORTS ----------- //

function Resume() {
  return (
    // Heading
    <div className="resume-container">
      <h1>SKILLS</h1>
      {/* <h1>Resume</h1> */}

      <div className="resume-section">
        <h5>Front-End:</h5>
        <div className="list-unstyled">
          <div>
            <img src={react} />
            <img src={javascript} />
            <img src={jquery} />
            <img src={html} />
            <img src={css} />
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h5>Back-End:</h5>
        <div className="list-unstyled">
          <div>
            <img src={mysql} />
            <img src={sequelize} />
            <img src={mongodb} />
            <img src={graphql} />
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h5>Other:</h5>
        <div className="list-unstyled">
          <div>
            <img src={jwt} />
            <img src={postman} />
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h5>Deployment:</h5>
        <div className="list-unstyled">
          <div>
            <img src={git} />
            <img src={heroku} />
            <img src={netlify} />
          </div>
        </div>
      </div>

      <div className="resume-section">
        <p>
          <a
            href="https://drive.google.com/file/d/1fyPdfJE69DEOAYsi5jG-D5H2KPLoPrSP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </p>
      </div>
    </div>
  );
}

export default Resume;
