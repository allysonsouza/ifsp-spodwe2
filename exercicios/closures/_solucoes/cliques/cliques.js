function contaCliques(etiqueta){
    let cliques = 0;

    return function(event) {
        console.log(etiqueta, cliques);
        cliques++;
    }
}

const botaoAzul = document.querySelector(".azul");
botaoAzul.addEventListener("click", contaCliques("Etiqueta Azul"));

const botaoAmarelo = document.querySelector(".amarelo");
botaoAmarelo.addEventListener("click", contaCliques("Etiqueta Amarela"));

const botaoRoxo = document.querySelector(".roxo");
botaoRoxo.addEventListener("click", contaCliques("Etiqueta Roxa"));