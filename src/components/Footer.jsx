import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2022-present {profile.name}</p>
      <p>Designed and coded by me with React and three.js.</p>
    </footer>
  );
}
