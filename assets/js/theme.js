const LOCAL_VARIABLE_THEME = "theme";
const DARK_CLASS = "dark";
const root = document.documentElement;

function setTheme(theme, persist = true) {
  const isDark = theme === "dark";

  root.classList.toggle(DARK_CLASS, isDark);

  if (persist) {
    localStorage.setItem(LOCAL_VARIABLE_THEME, theme);
  }

  updateIcon();
}

function toggleTheme() {
  const isDark = root.classList.contains(DARK_CLASS);
  setTheme(isDark ? "light" : "dark");
}

function updateIcon() {
  const img = document.getElementById("theme-icon");
  if (!img) return;

  const isDark = root.classList.contains(DARK_CLASS);

  // If dark is active, show sun icon as the next possible action.
  img.src = isDark ? "./assets/images/icons/sun.png" : "./assets/images/icons/moon.png";
}

function initTheme() {
  const saved = localStorage.getItem(LOCAL_VARIABLE_THEME);

  // Default is dark unless user explicitly saved light.
  setTheme(saved === "light" ? "light" : "dark", false);
}

window.toggleTheme = toggleTheme;
window.addEventListener("DOMContentLoaded", initTheme);
