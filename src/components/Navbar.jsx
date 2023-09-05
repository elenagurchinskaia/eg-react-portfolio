import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activeTab, setActiveTab] = useState("");
  const currentPage = useLocation().pathname;

  // function to handle tab click and set the active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // define styles for the active and inactive links
  const linkStyle = {
    color: "black",
  };

  const activeLinkStyle = {
    color: "grey", // text color when the tab is active
  };

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          to="/"
          className={`nav-link ${currentPage === "/" ? "active" : ""}`}
          style={activeTab === "home" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("home")}
        >
          <span>Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about"
          className={`nav-link ${currentPage === "/about" ? "active" : ""}`}
          style={activeTab === "about" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("about")}
        >
          <span>About</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          className={`nav-link ${currentPage === "/portfolio" ? "active" : ""}`}
          style={activeTab === "portfolio" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("portfolio")}
        >
          <span>Portfolio</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/contact"
          className={`nav-link ${currentPage === "/contacts" ? "active" : ""}`}
          style={activeTab === "contacts" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("contacts")}
        >
          <span>Contacts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/resume"
          className={`nav-link ${currentPage === "/resume" ? "active" : ""}`}
          style={activeTab === "resume" ? activeLinkStyle : linkStyle}
          onClick={() => handleTabClick("resume")}
        >
          <span>Resume</span>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
