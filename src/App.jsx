import { useCallback, useEffect, useState } from "react";
import Scene from "./components/Scene";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Panel from "./components/Panel";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useTheme from "./hooks/useTheme";
import useSceneParams from "./hooks/useSceneParams";
import * as sound from "./utils/sound";

const sections = [
  { id: "work", label: "Work", Component: Projects },
  { id: "skills", label: "Skills", Component: Skills },
  { id: "about", label: "About", Component: About },
  { id: "contact", label: "Contact", Component: Contact },
];

const fromHash = () => {
  const id = window.location.hash.slice(1);
  return sections.some((s) => s.id === id) ? id : null;
};

function App() {
  const [soundOn, setSoundOn] = useState(false);
  const [active, setActive] = useState(fromHash);
  const [theme, setTheme] = useTheme();
  const [params, setParams] = useSceneParams();

  const open = useCallback((id) => {
    sound.sfx.open();
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  }, []);

  const close = useCallback(() => {
    sound.sfx.close();
    window.history.replaceState(null, "", window.location.pathname);
    setActive(null);
  }, []);

  useEffect(() => {
    const onHash = () => setActive(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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

  const current = sections.find((s) => s.id === active);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Scene
        energy={current ? 1 : 0.2}
        theme={theme}
        params={params}
      />
      <Header
        sound={soundOn}
        onToggleSound={toggleSound}
        theme={theme}
        onTheme={setTheme}
        params={params}
        onParams={setParams}
        solid={Boolean(current)}
      />
      <main id="main" aria-hidden={current ? "true" : undefined}>
        <Hero sections={sections} onOpen={open} />
      </main>
      <Footer />
      {current && (
        <Panel title={current.label} onClose={close}>
          <current.Component onMusic={stopSiteSound} />
        </Panel>
      )}
    </>
  );
}

export default App;
