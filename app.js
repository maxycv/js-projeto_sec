//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo de adivinhaçao';

//let Paragrafo = document.querySelector ('p');
//Paragrafo.innerHTML = 'Escolha um numero entre 1 e 100';

// document.querySelector (?) Paragrafo.innerHTML altear o HTML pelo java scrip

exibirTextoNatela('h1', 'jogo de adivinhaçao');
exibirTextoNatela('p', 'escolha um numero de 1 a 100')

function exibirTextoNatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){alert('Apertpu o botão');


}
