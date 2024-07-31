let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio !';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado');
}

function exibirAlert() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito');
    alert(`Estive em %{nomeDaCidade} e lembrei de você`);
}  // Não funcionou !!!

function verificarSoma(){
    let num1 = parseInt(prompt('Digite o primeiro número'));
    let num2 = parseInt(prompt('Digite o segundo número'));
    let soma = num1 + num2;
    alert(`O resultado da soma é ${soma}`);

}