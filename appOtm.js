// CAPTURA ELEMENTOS
let elemAmigo = document.getElementById("nome-amigo"); //input
let elemListaAmigos = document.getElementById("lista-amigos"); // paragrafo
let elemListaSorteio = document.getElementById("lista-sorteio"); // paragrafo

// LISTA DE ARRAYS
let arrAmigosIncluidos = [];
let arrAmigosSorteados = [];

// Contador de tentativa de embaralhamento
let contador = 1;

// FUNCAO ADICIONAR AMIGO
function adicionar() {
  // Adiciona participante na lista de amigos desde que o campo não esteja em vazio ou já adicionado
  const amigo = elemAmigo.value;
  if (amigo && !arrAmigosIncluidos.includes(amigo.toUpperCase())) {
    arrAmigosIncluidos.push(amigo.toUpperCase());
    elemListaAmigos.textContent = arrAmigosIncluidos.join(", ");
    elemAmigo.value = "";
  }
}

function sortear() {
  // Limpa lista de sorteios
  elemListaSorteio.innerHTML = "";

  const sorteioBemSucedido = realizaSorteio();

  if (sorteioBemSucedido) {
    arrAmigosIncluidos.forEach((item, i) => {
      elemListaSorteio.innerHTML += `${item} --> ${arrAmigosSorteados[i]}<br>`;
    });
    console.log("Amigos sorteados", arrAmigosSorteados);
    contador = 1;
  } else {
    contador += 1;
    sortear();
  }
}

// FUNCAO PARA GERAR LISTA DE AMIGO E SEU AMIGO SECRETO
function realizaSorteio() {
  arrAmigosSorteados.length = 0;

  const arrAmigosEmbaralhados = arrAmigosIncluidos.slice();
  embaralhaAmigos(arrAmigosEmbaralhados);
  console.log(`Embaralhamento n: ${contador}`, arrAmigosEmbaralhados);

  // Verifica se o amigo tirou ele mesmo e retorna o status falso ou verdadeiro
  for (let i = 0; i < arrAmigosIncluidos.length; i++) {
    if (arrAmigosEmbaralhados[i] == arrAmigosIncluidos[i]) {
      return false;
    }
    // Se não tiver erro, adiciona na lista de sorteados
    arrAmigosSorteados.push(arrAmigosEmbaralhados[i]);
  }
  return true;
}

// FUNCAO PARA EMBARALHAR LISTA DE AMIGOS
function embaralhaAmigos(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// FUNCAO DE REINICIAR
function reiniciar() {
  arrAmigosIncluidos.length = 0;
  elemListaSorteio.innerHTML = "";
  elemAmigo.value = "";
  elemListaAmigos.textContent = "";
}
