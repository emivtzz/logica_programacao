alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = Math.random(1, 30);
let chute = prompt("Escolha um número entre 1 e 50");

// Valida se o número está entre a margem permitida
if (chute > 50 || chute < 50) {
    alert("Seu chute está fora da margem")
} 

// Valida se o jogador acertou
if (numeroSecreto == chute) {
    alert("Boa! Você acertou!");
} else if (numeroSecreto > chute) {
    alert("O número secreto é maior. Tente novamente!");
} else if (numeroSecreto < chute) {
    alert("O número secreto é menor. Tente novamente!");
}