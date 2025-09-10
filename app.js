alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

//while = enquanto (loop). Enquanto o número for diferente do chute, esse código irá ser executado
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e 100`);

    if (numeroSecreto == chute) {
        //Se o chute for igual ao número secreto, quero que o while PARE PARE AGORA
        //break;
    } else {
        if (numeroSecreto > chute) {
        alert(`O número secreto é maior. Tente novamente!`);
        } else {
            alert(`O número secreto é menor. Tente novamente!`);
        }
        tentativas++ //tentativas = tentativas + 1
    }
} 

//OPERADOR TERNÁRIO
//Parecido com perguntas do portugues mesmo: tentativas é maior que 1? se sim, tal coisa. Senão (:) outra coisa
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`Boa! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/* AO INVÉS DE: 
if (tentativas > 1) {
    alert(`Boa! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Boa! Você acertou o número secreto: ${numeroSecreto} com ${tentativas} tentativa`);
}*/


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