import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>SKILLS</h1>
      {/* <h1>Resume</h1> */}

      <div className="resume-section">
        <h5>Front-End:</h5>
        <ul className="list-unstyled">
          <li>React</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      <div className="resume-section">
        <h5>Back-End:</h5>
        <ul className="list-unstyled">
          <li>mySQL</li>
          <li>Sequelizer</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>

      <div className="resume-section">
        <h5>Other:</h5>
        <ul className="list-unstyled">
          <li>JWT</li>
          <li>Postman</li>
        </ul>
      </div>

      <div className="resume-section">
        <h5>Deployment:</h5>
        <ul className="list-unstyled">
          <li>Git</li>
          <li>Heroku</li>
          <li>Netlify</li>
        </ul>
      </div>

      <div className="resume-section">
        <p>
          <a
            href="https://drive.google.com/file/d/1pZA6_dcJcUrQUh7iSwNJI3CLwZJvaKqF/view?usp=sharing"
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
