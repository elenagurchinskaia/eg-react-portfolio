import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/" ? "nav-link active" : "nav-link"}
        >
          home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about"
          className={currentPage === "/about" ? "nav-link active" : "nav-link"}
        >
          about
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          className={
            currentPage === "/portfolio" ? "nav-link active" : "nav-link"
          }
        >
          portfolio
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/contact"
          className={
            currentPage === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          contacts
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === "/resume" ? "nav-link active" : "nav-link"}
        >
          resume
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
