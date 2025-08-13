// Captura elementos do HTML
let elemAmigo = document.getElementById("nome-amigo");
let elemListaAmigos = document.getElementById("lista-amigos");
let elemListaSorteio = document.getElementById("lista-sorteio");

// Array para armazenar os amigos
let amigos = [];

// Adiciona um participante à lista
function adicionar() {
  const amigo = elemAmigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = amigos.join(", ");
    elemAmigo.value = "";
  }
}

// Realiza o sorteio
function sortear() {
  // Limpa a lista de sorteios anterior
  elemListaSorteio.innerHTML = "";
  
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio!");
    return;
  }

  // Cria uma cópia da lista de amigos para embaralhar
  let amigosSorteados = amigos.slice();
  
  // Realiza o sorteio de forma que ninguém tire a si mesmo
  do {
    embaralhaArray(amigosSorteados);
  } while (amigosSorteados.some((amigo, index) => amigo === amigos[index]));

  // Exibe o resultado do sorteio
  for (let i = 0; i < amigos.length; i++) {
    elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigosSorteados[i]}<br>`;
  }
}

// Função para embaralhar o array (Fisher-Yates shuffle)
function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Reinicia o aplicativo
function reiniciar() {
  amigos = [];
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  elemListaAmigos.textContent = "";
}
