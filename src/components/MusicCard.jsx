import { useState } from "react";
import { profile } from "../data/profile";

// The Spotify embed is only loaded after a click, so it adds no weight
// (or third-party cookies) for visitors who ignore it.
export default function MusicCard({ onPlay }) {
  const [open, setOpen] = useState(false);
  const { title, embed, link } = profile.music;

  return (
    <div className="music-card">
      <p className="music-label">What I code to</p>
      {open ? (
        <iframe
          title={`Spotify player: ${title}`}
          src={embed}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : (
        <div className="music-closed">
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => {
              onPlay?.();
              setOpen(true);
            }}
          >
            ▶ Play “{title}”
          </button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Open in Spotify ↗
          </a>
        </div>
      )}
    </div>
  );
}
