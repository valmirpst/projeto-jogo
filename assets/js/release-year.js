function checkReleaseYear() {
  const releaseYear = 2026;
  const currentYear = new Date().getFullYear();
  if (currentYear === releaseYear) {
    alert("Grande Lançamento! O jogo é lançado este ano.");
  }
}

window.addEventListener("load", () => {
  checkReleaseYear();
});
