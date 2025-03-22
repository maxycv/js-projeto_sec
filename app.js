// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação';

// let subtitulo = document.querySelector('p');
// subtitulo.innerHTML = 'Escolha um número entre 1 e 100';


exibirTextoNaTela('h1', 'Jogo de adivinhação');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
let tentativas = 3;
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    if (tentativas === 0) {
        
        exibirTextoNaTela('p', 'suas tentativa acabaram! o numero era' + numeroSecreto );
    } else {
        tentativas--;
        let palavratentativa = tentativas === 1 ? 'tentativa' : 'tentativas';
        if (chute === numeroSecreto) {
            exibirTextoNaTela('h1', `parabens voce avertou o numesecreto e ${numeroSecreto}.`)

        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `erou o numero secreto e menor voce ainda tem ${tentativas}.`);
        }
        else { exibirTextoNaTela('p', `Errou! o nemero secreto e maior voce ainta tem ${tentativas} ${palavratentativa}`); }
    }





}
//<h1>Jogo de adivinhação</h1>
//<p>Escolha um número entre 1 e 100</p>

