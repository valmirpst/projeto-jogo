/* Entrada de Dados via Prompt (Deve ser solicitada ao navegador a idade do usuário utilizando obrigatoriamente o comando 
prompt, configurado para ser disparado de forma automática ao carregar a página ou através de uma interação com botão no 
topo do site). */

function handleUserInput(askAgain = false) {
  const namePrompt = () => prompt("Bem-vindo ao site! Qual é o seu nome?") || "Visitante";
  const agePrompt = (name) => prompt(`Olá, ${name}! Quantos anos você tem?`);

  const savedName = localStorage.getItem("userName");
  const savedAge = localStorage.getItem("userAge");

  const name = askAgain ? namePrompt() : savedName || namePrompt();
  const idade = askAgain ? agePrompt(name) : savedAge || agePrompt(name) || "0";

  localStorage.setItem("userName", name);
  localStorage.setItem("userAge", idade);

  // Acesso ao conteúdo sensível
  if (parseInt(idade) < 16) {
    alert("Desculpe, alguns conteúdos do site estarão protegidos devido à sua idade (menor de 16 anos).");

    const protectedElements = document.getElementsByClassName("protected-content");
    for (let i = 0; i < protectedElements.length; i++) {
      protectedElements[i].style.filter = "blur(3px)";

      if (protectedElements[i].id === "trailer-video") {
        protectedElements[i].style.pointerEvents = "none";
        protectedElements[i].style.cursor = "not-allowed";
        protectedElements[i].pause();
      }

      if (protectedElements[i].tagName.toLowerCase() === "a") {
        protectedElements[i].href = "javascript:void(0)";
        protectedElements[i].style.pointerEvents = "none";
      }
    }
  } else {
    alert(`Bem-vindo, ${name}! Aproveite o conteúdo completo do site.`);

    const protectedElements = document.getElementsByClassName("protected-content");
    for (let i = 0; i < protectedElements.length; i++) {
      protectedElements[i].style.filter = "none";

      if (protectedElements[i].id === "trailer-video") {
        protectedElements[i].style.pointerEvents = "auto";
        protectedElements[i].style.cursor = "auto";
      }

      if (protectedElements[i].tagName.toLowerCase() === "a") {
        protectedElements[i].href = "#trailer";
        protectedElements[i].style.pointerEvents = "auto";
      }
    }
  }
}

window.addEventListener("load", function () {
  setTimeout(function () {
    handleUserInput();
  }, 50); // pequeno delay pra garantir que a página esteja carregada

  document.getElementById("change-user-info-btn").addEventListener("click", function () {
    handleUserInput(true);
  });
});
