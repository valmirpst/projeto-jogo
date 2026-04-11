/* Verificação Automatizada de Lançamento (Resgate do ano atual através do sistema via JavaScript para comparação 
lógica com uma constante de lançamento do jogo; caso os anos sejam iguais, o sistema deve disparar um alert automático 
de Grande Lançamento). */

const releaseYear = 2026;

function checkReleaseYear() {
  const currentYear = new Date().getFullYear();
  if (currentYear === releaseYear) {
    alert("Grande Lançamento! O jogo é lançado este ano.");
  }
}

checkReleaseYear();
