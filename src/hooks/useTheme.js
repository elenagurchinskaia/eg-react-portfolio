import { useState } from "react";

export const themes = [
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
];

const KEY = "theme";

function initial() {
  try {
    const saved = localStorage.getItem(KEY);
    if (themes.some((t) => t.id === saved)) return saved;
  } catch {
    // storage unavailable; fall through
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function apply(id) {
  document.documentElement.dataset.theme = id;
  try {
    localStorage.setItem(KEY, id);
  } catch {
    // ignore
  }
}

export default function useTheme() {
  // Set the attribute synchronously (not in an effect) so child effects, like
  // the WebGL scene reading CSS variables, always see the current theme.
  const [theme, setThemeState] = useState(() => {
    const id = initial();
    document.documentElement.dataset.theme = id;
    return id;
  });

  const setTheme = (id) => {
    apply(id);
    setThemeState(id);
  };

  return [theme, setTheme];
}
