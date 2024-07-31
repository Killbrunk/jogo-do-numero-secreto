let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Que pena!');
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('h1', 'Que pena!');
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
console.log(`O numero secreto é: ${numeroSecreto}`);

function aumentarDificuldade() {
        if (numeroLimite < 50) { numeroLimite = 50;
        } else {
            numeroLimite += 50;
        }
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
    alert(`O numero secreto agora é ${numeroLimite}`) // Exibe um alert para alertar da mudança de dificuldade
    numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto dentro do novo limite
}

function diminuirDificuldade() {
    if (numeroLimite == 50) {
        numeroLimite = 10;
    } else if (numeroLimite > 50) {
        numeroLimite -= 50;
    }exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
alert(`O numero secreto agora é ${numeroLimite}`) // Exibe um alert para alertar da mudança de dificuldade
numeroSecreto = gerarNumeroAleatorio(); // Gera um novo número secreto dentro do novo limite
}




// daqui para baixo é o exercicio




// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';