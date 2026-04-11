/* Manipulação de Dados Estáticos (O estudante deve declarar no mínimo 5 variáveis ou constantes exclusivas em 
JavaScript para armazenar informações do jogo e realizar o resgate desses valores injetando-os nos elementos HTML via 
DOM, sem utilizar dados de outros critérios). */

const gameTitle = "Fragmentos do Tempo";
const platform = "PC";
const classification = 16;
const developerWebsite = "https://valmirpst.github.io";
const currentYear = new Date().getFullYear();

const gameTitleElement = document.getElementById("constants__game-title");
if (gameTitleElement) gameTitleElement.textContent = gameTitle;

const platformElement = document.getElementById("constants__platform");
if (platformElement) platformElement.textContent = platform;

const classificationElement = document.getElementById("constants__classification");
if (classificationElement) classificationElement.innerHTML = `+${classification}`;

const developerWebsiteElement = document.getElementById("constants__developer-website");
if (developerWebsiteElement) {
  developerWebsiteElement.href = developerWebsite;
  developerWebsiteElement.innerHTML = developerWebsite;
}

const currentYearElement = document.getElementById("current-year");
if (currentYearElement) currentYearElement.textContent = currentYear;
