import { useState } from "react";
import Scene from "./components/Scene";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { experience } from "./data/experience";
import useTheme from "./hooks/useTheme";
import useSceneParams from "./hooks/useSceneParams";
import useActiveSection from "./hooks/useActiveSection";
import * as sound from "./utils/sound";

// Experience only appears once there are entries to show.
const sections = [
  { id: "about", label: "About" },
  ...(experience.length ? [{ id: "experience", label: "Experience" }] : []),
  { id: "projects", label: "Projects" },
];
const sectionIds = sections.map((s) => s.id);

function App() {
  const [soundOn, setSoundOn] = useState(false);
  const [theme, setTheme] = useTheme();
  const [params, setParams] = useSceneParams();
  const active = useActiveSection(sectionIds);

  const toggleSound = () => {
    if (soundOn) sound.disable();
    else sound.enable();
    setSoundOn(!soundOn);
  };

  // Spotify and the site's ambient sound shouldn't play over each other.
  const stopSiteSound = () => {
    sound.disable();
    setSoundOn(false);
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Scene energy={0.1} theme={theme} params={params} />
      <div className="layout">
        <Header
          sections={sections}
          active={active}
          sound={soundOn}
          onToggleSound={toggleSound}
          theme={theme}
          onTheme={setTheme}
          params={params}
          onParams={setParams}
        />
        <main id="main">
          <About onMusic={stopSiteSound} />
          <Experience />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
