alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 10;
let chute;
let tentativas = 1;

/* Valida se o número está entre a margem permitida
if (chute > 50 || chute < 50) {
    alert("Seu chute está fora da margem")
} */

//while = enquanto (loop). Enquanto o número for diferente do chute, esse código irá ser executado
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e 10`);

    if (numeroSecreto == chute) {
        alert(`Boa! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (numeroSecreto > chute) {
        alert(`O número secreto é maior. Tente novamente!`);
        } else {
            alert(`O número secreto é menor. Tente novamente!`);
        }
        tentativas++ //tentativas = tentativas + 1
    }
} 

/* 1. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador = 0;

alert('Clique para começar o contador!');

while(contador < 10){
    contador++;
    alert('Contador está em: ' + contador);
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
// usando um loop while no console do navegador.
let contador = prompt('Digite um número:');

while (contador != 0){
    contador--;
    console.log(contador);
}*/