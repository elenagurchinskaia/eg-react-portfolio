import kinlo from "../assets/images/kinlo-banner-image.webp";
import balloonBar from "../assets/images/maris-balloon-bar.webp";

export const projects = [
  {
    name: "Kinlo",
    status: "In development · launching in Tulum",
    summary:
      "A mobile app that turns strangers into friends: it matches people into group experiences using Big Five personality traits, with expert-led events, safety tools and support for four languages.",
    image: kinlo,
    tags: ["React Native", "Expo", "Firebase", "Stripe"],
    code: "https://github.com/hornandhooves/BondVibe",
  },
  {
    name: "Mari's Balloon Bar",
    summary: "A small-business site built with React and Vite.",
    image: balloonBar,
    aspect: "2494 / 1330",
    tags: ["React", "Vite"],
    live: "https://marisballoonbar.com/",
    code: "https://github.com/elenagurchinskaia/maris-ballon-bar",
  },
];
