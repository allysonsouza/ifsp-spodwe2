function recuperar(coracoes) {
	return function recuperarVida(herói) {
        if (herói.vida < herói.vidaMaxima) {
            herói.vida += coracoes;
        }

        if ( herói.vida > herói.vidaMaxima ) {
            herói.vida = herói.vidaMaxima;
        }

        return herói.vida;
    }
}

const maçã = recuperar(1);
const poção = recuperar(3);
const elixir = recuperar(5);

const herói = {
	nome: "Herói",
	vida: 2,
	vidaMaxima: 10
};

// console.log(maçã(herói)); 
console.log(poção(herói));
// console.log(elixir(herói));