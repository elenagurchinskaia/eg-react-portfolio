import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <ul>
        {profile.links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={l.label}
            >
              <i className={`fab ${l.icon}`} aria-hidden="true"></i>
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
