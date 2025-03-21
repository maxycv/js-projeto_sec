//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo de adivinhaçao';

//let Paragrafo = document.querySelector ('p');
//Paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';


exibirTextoNatela('h1', 'jogo de adivinhaçao');
exibirTextoNatela('p', 'escolha um numero de 1 a 100')

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100) + 1;

    // function dar a funçaom para o codigo
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto)


function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    //document.querySelector (?) ??.innerHTML alterar o HTML pelo java scrip
}

function verificarChute(){
let chute = parseInt (document.querySelector ('input'). value);
console.log(chute === numeroSecreto);
}
     


