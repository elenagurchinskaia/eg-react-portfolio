import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      {/* <h1>Resume</h1> */}

      <div className="resume-section">
        <h5>Front-End:</h5>
        <ul className="list-unstyled">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

      <div className="resume-section">
        <h5>Back-End:</h5>
        <ul className="list-unstyled">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className="resume-section">
        <p>
          <a
            href="https://drive.google.com/file/d/1pZA6_dcJcUrQUh7iSwNJI3CLwZJvaKqF/view"
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
