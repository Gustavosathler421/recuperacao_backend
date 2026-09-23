const entrada = require('readline-sync');

const nivelOleo = entrada.questionFloat("Digite o nivel de oleo (%): ");

if (nivelOleo >= 40 && nivelOleo <= 80) {
    console.log(`Nivel informado: ${nivelOleo}%`);
    console.log("NIVEL NORMAL");
} else {
    console.log(`Nivel informado: ${nivelOleo}%`);
    console.log("INSPECAO NECESSARIA");
}