# Quebra Gelo

## Contexto

Três cubos de gelo escondem, em posições aleatórias:

- 1 monstro (derrota)
- 1 baú do tesouro (vitória)
- 1 cubo vazio

Cada cubo quebra após 3 marretadas (cliques). Ao quebrar, revela o conteúdo. Achar o monstro encerra o jogo com derrota; achar o baú encerra com vitória.

## Requisitos

### Closure (função fábrica)

Crie uma função fábrica `criarCubo()` que retorna uma função (o `callback` do clique).
Essa função deve:

- Memorizar a quantidade de marretadas (cliques)
- Incrementar a contagem a cada marretada (clique)
- Ao atingir 3 marretadas, invocar uma função que avalia o conteúdo e condições de vitória/derrota
- Ignore cliques posteriores

### Sortear conteúdos

Crie uma função `sortearConteudos()` que retorna um array embaralhado com "monstro", "bau" e "vazio".

Associe o retorno de criarCubo como callback de click a cada um dos 3 botões.

Exiba na tela:
- O conteúdo revelado quando o cubo quebrar.
- A mensagem final de vitória ou derrota.
- Ao fim do jogo (vitória ou derrota), desabilite os botões restantes.
- Adicione um botão “Reiniciar” que sorteia novamente e recria os closures.

### Ponto de atenção

Cada botão deve ter seu próprio contador, isolado em seu próprio escopo de closure. Chamar criarCubo três vezes deve produzir três contadores independentes.

### Estrutura base

#### HTML

```html
<h1>Quebra-Gelo</h1>
<div id="cubos">
  <button class="cubo">🧊 Cubo 1 (3)</button>
  <button class="cubo">🧊 Cubo 2 (3)</button>
  <button class="cubo">🧊 Cubo 3 (3)</button>
</div>
<p id="mensagem"></p>
<button id="reiniciar">Reiniciar</button>
```
#### JavaScript

```js
const MARRETADAS = 3;
let conteudos = ["monstro", "bau", "vazio"];

function criarCubo() {
  // TODO: sortear índice aleatório e remover o item de `conteudos` (splice)
  // TODO: declarar contador (closure)
  return function () {
    // TODO: incrementar, notificar progresso via onMarretada,
    // chamar onQuebrar(conteudo) ao chegar em MARRETADAS
  };
}

function iniciarJogo() {
  // TODO: sortear conteúdos
  // TODO: para cada botão, remover listeners antigos (ex.: cloneNode) e
  //       adicionar addEventListener("click", criarCubo(...))
  // TODO: limpar mensagem e reabilitar botões
}

document.getElementById("reiniciar").addEventListener("click", iniciarJogo);
iniciarJogo();
```

## Critérios de aceitação
- Cada cubo só revela o conteúdo na 3ª marretada.
- Cliques após a quebra não alteram o estado.
- Os contadores são independentes entre cubos.
- Nenhuma variável global armazena a contagem de cliques.
- Ao reiniciar, as posições do monstro, baú e vazio mudam e os contadores voltam a zero.

## Desafios extras

- Variar o número de marretadas por cubo (ex.: aleatório entre 2 e 5).
- Adicionar um placar de vitórias e derrotas, também mantido por closure.
- Mostrar uma dica (“você ouve um rugido...”) na 2ª marretada de um cubo com monstro.
- Refatorar criarCubo para expor também um método resetar(), retornando um objeto em vez de uma função.