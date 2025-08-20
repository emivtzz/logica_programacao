alert("Bem vindo ao jogo do número secreto!");
let numeroSecreto = 10;
let chute

/* Valida se o número está entre a margem permitida
if (chute > 50 || chute < 50) {
    alert("Seu chute está fora da margem")
} */

//while = enquanto (loop). Enquanto o número for diferente do chute, esse código irá ser executado
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e 10`);

    if (numeroSecreto == chute) {
        alert(`Boa! Você acertou!`);
    } else {
        if (numeroSecreto > chute) {
        alert(`O número secreto é maior. Tente novamente!`);
        } else {
            alert(`O número secreto é menor. Tente novamente!`);
        }
    }
}