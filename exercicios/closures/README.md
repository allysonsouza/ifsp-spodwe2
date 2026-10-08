# Closures

Exercícios para praticar closures em JavaScript.

1. Crie uma função, que retorna uma função, que conta quantas vezes um botão foi clicado, memorizando a quantidade de cliques. Esta função deve ser adicionada como `callback` a 3 botões distintos.

2. Crie uma função que retorna outra função que restaura uma quantidade fixa de energia de um personagem:

```js
function recuperar(coracoes) {
	// TODO
}

const maçã = recuperar(1);
const poção = recuperar(3);
const elixir = recuperar(5);

const heroi = {
	name: "Hero",
	vida: 2,
	vidaMaxima: 10
};

console.log(maçã(herói));  // Should output: 3
console.log(poção(herói)); // Should output: 6
console.log(elixir(heroói)); // Should output: 10 (6 + 5 = 11, capped at maxHealth)
```