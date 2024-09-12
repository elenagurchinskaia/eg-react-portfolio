// ----------- IMPORTS ----------- //

import aboutImage from "../assets/images/avatar.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={aboutImage} alt="About Me" className="about-image" />
          </div>
          <div className="col-md-6">
            <h2>About</h2>
            <p>
              Full-stack software developer with a strong foundation in design.
              Recognized for the ability to blend creative aesthetics with
              technical functionality, resulting in user-centered design
              solutions. Skilled in a variety of technologies, including but not
              limited to web development tools such as React, JavaScript, HTML,
              CSS, Node, Express. Skilled in creative problem-solving and
              efficient project management. Fueled by a passionate commitment to
              addressing user needs through thoughtful design and leveraging
              technology for positive societal impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
