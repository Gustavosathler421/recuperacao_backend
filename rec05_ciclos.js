const entrada = require('readline-sync');

const produtosPorCiclo = entrada.questionInt("Digite quantos produtos sao produzidos por ciclo: ");

 console.log("\n=== PRODUÇÃO ACUMULADA ===");

for (let ciclo = 1; ciclo <= 12; ciclo++) {
    const producaoAcumulada = produtosPorCiclo * ciclo;

    console.log(`Ciclo ${ciclo}: ${producaoAcumulada} produtos acumulados`);
}

