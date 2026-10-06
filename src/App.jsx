import { useCallback, useEffect, useState } from "react";
import Scene from "./components/Scene";
import Entry from "./components/Entry";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Panel from "./components/Panel";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
  // A deep link (e.g. /#work) skips the intro so shared links land on content.
  const [entered, setEntered] = useState(() => fromHash() !== null);
  const [soundOn, setSoundOn] = useState(false);
  const [active, setActive] = useState(fromHash);

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

  const enter = (withSound) => {
    if (withSound) {
      sound.enable();
      sound.sfx.open();
    }
    setSoundOn(withSound);
    setEntered(true);
  };

  const toggleSound = () => {
    if (soundOn) sound.disable();
    else sound.enable();
    setSoundOn(!soundOn);
  };

  const current = sections.find((s) => s.id === active);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Scene energy={current ? 1 : entered ? 0.2 : 0} />
      {!entered ? (
        <Entry onEnter={enter} />
      ) : (
        <>
          <Header sound={soundOn} onToggleSound={toggleSound} />
          <main id="main" aria-hidden={current ? "true" : undefined}>
            <Hero sections={sections} onOpen={open} />
          </main>
          <Footer />
          {current && (
            <Panel title={current.label} onClose={close}>
              <current.Component />
            </Panel>
          )}
        </>
      )}
    </>
  );
}

export default App;
