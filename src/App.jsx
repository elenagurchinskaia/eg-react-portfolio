import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// import About from "./pages/About";

function App() {
  // const [showAbout, setActiveTab] = useState(true);

  return (
    <div>
      <Header />
      {/* {showAbout && <About />} */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
