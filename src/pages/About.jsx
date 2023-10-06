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
              Full-stack software developer with a background in design.
              Recognized for the ability to blend creative aesthetics with
              technical functionality, resulting in user-centered design
              solutions. Proficient in React, JavaScript, HTML, and CSS, with a
              knack for creative problem-solving and effective project
              management. Driven by a passion for addressing user needs through
              thoughtful design and harnessing technology to make a positive
              societal impact. Uniquely positioned to combine web development
              skills with a design background to bring a fresh perspective to
              product development for enhanced user satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
