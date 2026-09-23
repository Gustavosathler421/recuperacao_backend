const entrada = require("readline-sync");

let soma = 0;

for (let i = 1; i <= 6; i++) {
    const tempo = entrada.questionFloat(`Digite a medicao ${i}: `);
    soma += tempo;
}

const media = soma / 6;

console.log("\n=== RESULTADO DOS TEMPOS ===");
console.log(`\nSoma dos tempos: ${soma} minutos`);
console.log(`Media dos tempos: ${media} minutos`);