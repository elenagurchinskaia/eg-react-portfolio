import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="d-flex justify-content-between">
      <div className="">
        <h1>Elena Gurchinskaia</h1>
        <h5>Designer & Developer</h5>
      </div>
      <Navbar />
    </header>
  );
}
