const root = document.documentElement;

function setTheme(theme, persistir = true) {
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);

  if (persistir) {
    localStorage.setItem("theme", theme);
  }

  updateIcon();
}

function toggleTheme() {
  const isDark = root.classList.contains("dark");
  setTheme(isDark ? "light" : "dark");
}

function updateIcon() {
  const img = document.getElementById("theme-icon");
  if (!img) return;

  const isDark = root.classList.contains("dark");

  // If dark is active, show sun icon as the next possible action.
  img.src = isDark ? "./assets/images/icons/sun.png" : "./assets/images/icons/moon.png";
}

function initTheme() {
  const saved = localStorage.getItem("theme");

  // Default is dark unless user explicitly saved light.
  setTheme(saved === "light" ? "light" : "dark", false);
}

window.toggleTheme = toggleTheme;
window.addEventListener("DOMContentLoaded", initTheme);
