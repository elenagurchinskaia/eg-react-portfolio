import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2023-present {profile.name}</p>
    </footer>
  );
}
