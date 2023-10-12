const form = document.getElementById("avaliacao-form");
const perguntas = document.querySelectorAll(".pergunta");
const botoesProximo = document.querySelectorAll(".proximo-btn");

let perguntaAtual = 0;

function mostrarPergunta(indice) {
  perguntas[indice].style.display = "block";
}

function ocultarPergunta(indice) {
  perguntas[indice].style.display = "none";
}

function proximaPergunta() {
  ocultarPergunta(perguntaAtual);
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta(perguntaAtual);
  } else {
    alert("Você respondeu todas as perguntas. Obrigado!");
  }
}

botoesProximo.forEach((botao, indice) => {
  botao.addEventListener("click", proximaPergunta);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const respostas = {};

  for (let i = 1; i <= perguntas.length; i++) {
    const pergunta = document.querySelector(`#pergunta${i}`);
    const inputName = `pergunta${i}`;
    const input = pergunta.querySelector(`input[name="${inputName}"]:checked`);
    const sugestao = pergunta.querySelector(`textarea[name="sugestao${i}"]`);

    respostas[inputName] = input ? input.value : "";
    respostas[`sugestao${i}`] = sugestao.value;
  }

  console.log(respostas);

  alert("Avaliação enviada com sucesso!");
});

// Inicialmente, esconde todas as perguntas, exceto a primeira
for (let i = 1; i < perguntas.length; i++) {
  perguntas[i].style.display = "none";
}

// Mostra a primeira pergunta
mostrarPergunta(perguntaAtual);
