import aboutImage from "../assets/images/avatar.jpeg";
import "../styles/about.css";

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
              "Hello, I'm Elena, a passionate web developer with a flair for
              crafting elegant and user-friendly solutions. With a strong
              foundation in front-end and back-end development, I bring to life
              dynamic and responsive websites that engage users and deliver
              seamless experiences. Whether it's turning a design into clean and
              efficient code or building interactive features, I'm driven by the
              challenge of creating web applications that leave a lasting
              impact. My commitment to staying up-to-date with the latest
              technologies and best practices ensures that I'm always ready to
              tackle new projects and contribute to innovative solutions. Let's
              collaborate to build something remarkable together!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
