import upstream from "../assets/images/project-01_.png";
import monkeysCup from "../assets/images/project-02_.png";
import sasquest from "../assets/images/project-03.png";
import weather from "../assets/images/project-04.jpg";
import noteTaker from "../assets/images/project-06.jpg";
import balloonBar from "../assets/images/project-07.png";

export const projects = [
  {
    name: "SASQUEST",
    summary: "A project planner for solo software developers.",
    image: sasquest,
    tags: ["JavaScript", "Team project"],
    live: "https://dry-eyrie-09248-5a9ea5cc85a4.herokuapp.com/",
    code: "https://github.com/laineycreighton/sasquest",
  },
  {
    name: "Upstream Travel",
    summary:
      "Helps travelers pick a destination with recommendations plus safety ratings across six categories for cities worldwide.",
    image: upstream,
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://elenagurchinskaia.github.io/upstream-travel/",
    code: "https://github.com/elenagurchinskaia/upstream-travel/",
  },
  {
    name: "The Monkey's Cup",
    summary:
      "Storefront and ticket booking for a jungle-themed escape room experience.",
    image: monkeysCup,
    tags: ["JavaScript", "Team project"],
    live: "https://sheltered-scrubland-47894-17ae2d63c103.herokuapp.com/",
    code: "https://github.com/DSHowarth/Escape-Room-Storefront",
  },
  {
    name: "Mari's Balloon Bar",
    summary: "A small-business site built with React and Vite.",
    image: balloonBar,
    tags: ["React", "Vite"],
    live: "https://maris-ballon-bar.netlify.app/",
    code: "https://github.com/elenagurchinskaia/maris-ballon-bar",
  },
  {
    name: "Weather Dashboard",
    summary:
      "Current conditions and a five-day forecast for any city, with search history.",
    image: weather,
    tags: ["JavaScript", "HTML", "CSS"],
    live: "https://elenagurchinskaia.github.io/weather-dashboard/",
    code: "https://github.com/elenagurchinskaia/weather-dashboard",
  },
  {
    name: "Note Taker",
    summary: "Create, save and revisit notes through a streamlined interface.",
    image: noteTaker,
    tags: ["Node", "Express"],
    live: "https://eg-note-taker-fd686ed98563.herokuapp.com/",
    code: "https://github.com/elenagurchinskaia/express-note-taker",
  },
];
