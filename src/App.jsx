// import { useState } from "react";
// import "./App.css";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacts from "./components/pages/Contacts";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
