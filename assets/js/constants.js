/* Manipulação de Dados Estáticos (O estudante deve declarar no mínimo 5 variáveis ou constantes exclusivas em 
JavaScript para armazenar informações do jogo e realizar o resgate desses valores injetando-os nos elementos HTML via 
DOM, sem utilizar dados de outros critérios). */

const gameTitle = "Fragmentos do Tempo";
const developer = "Valmir Paiva Stachin";
const platform = "PC";
const classification = 16;
const developerWebsite = "https://valmirpst.github.io";

const currentYear = new Date().getFullYear();

document.getElementById("constants__game-title").textContent = gameTitle;
document.getElementById("constants__platform").textContent = platform;
document.getElementById("constants__classification").textContent = classification;
document.getElementById("constants__developer-name").textContent = developer;
document.getElementById("constants__developer-website").href = developerWebsite;
document.getElementById("current-year").textContent = currentYear;
