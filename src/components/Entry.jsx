import { useEffect, useRef } from "react";
import { profile } from "../data/profile";

export default function Entry({ onEnter }) {
  const first = useRef(null);
  useEffect(() => {
    first.current?.focus();
  }, []);

  return (
    <div className="entry" role="dialog" aria-label="Welcome">
      <p className="eyebrow">Portfolio</p>
      <h1 className="entry-name">{profile.name}</h1>
      <p className="lede">{profile.role}</p>
      <div className="hero-actions">
        <button
          ref={first}
          className="btn"
          onClick={() => onEnter(true)}
        >
          Enter with sound
        </button>
        <button className="btn btn-ghost" onClick={() => onEnter(false)}>
          Enter without sound
        </button>
      </div>
    </div>
  );
}
