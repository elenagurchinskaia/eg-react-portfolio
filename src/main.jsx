import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Portfolio from "./components/pages/Portfolio.jsx";
import Contacts from "./components/pages/Contacts.jsx";
import Resume from "./components/pages/Resume.jsx";
import Error from "./components/pages/Error.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

const router = createBrowserRouter([
  {
    name: "Home",
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/resume", element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
