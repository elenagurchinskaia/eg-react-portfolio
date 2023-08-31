import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    // <div className="container">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
          home
          </Link>
          </li>
        <a className="nav-link" href="#about">
          about
        </a>
        <a className="nav-link" href="#portfolio">
          portfolio
        </a>
        <a className="nav-link" href="#contacts">
          contacts
        </a>
        <a className="nav-link" href="#resume">
          resume
        </a>
      </li>
    </ul>
    // </div>
    // </nav>
  );
}

// make it links
export default Navbar;
