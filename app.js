let elemAmigo = document.getElementById("nome-amigo"); //input
let elemListaAmigos = document.getElementById("lista-amigos"); // paragrafo
let elemListaSorteio = document.getElementById("lista-sorteio"); // paragrafo

let amigos = [];

function adicionar() {
  // Adiciona participante na lista de amigos desde que o campo não esteja em vazio ou já adicionado
  const amigo = elemAmigo.value;
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = amigos.join(", ");
    elemAmigo.value = "";
  }
}
function sortear() {
  elemListaSorteio.innerHTML = "";

  embaralhaArray(amigos);
  for (i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
    } else {
      elemListaSorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
    }
  }
}

// FUNCAO PARA EMBARALHAR ARRAY
function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function reiniciar() {
  amigos.length = 0;
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  elemListaAmigos.textContent = "";
}
