import Navbar from "./Navbar";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="d-flex justify-content-between">
      <div className="header">
        <h1>Elena Gurchinskaia</h1>
        <h5>Full-Stack Developer</h5>
      </div>
      <Navbar />
    </header>
  );
}
