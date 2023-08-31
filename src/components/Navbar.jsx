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
          to="/About"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          about
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={
            currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          portfolio
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Contacts"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          contacts
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
        >
          resume
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
