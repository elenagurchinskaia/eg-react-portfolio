import { useState } from "react";
import "./App.css";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contacts from "./components/pages/Contacts";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
