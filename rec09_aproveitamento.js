const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE";
    } else if (percentual >= 75) {
        return "ADEQUADO";
    } else {
        return "REVISAR PROCESSO";
    }
}

const total = entrada.questionFloat("Digite a quantidade total de materia-prima: ");

const util = entrada.questionFloat("Digite a quantidade util de materia-prima: ");

const percentual = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(percentual);

console.log("\n--- RELATORIO ---");
console.log(`Quantidade total: ${total}`);
console.log(`Quantidade util: ${util}`);
console.log(`Aproveitamento: ${percentual.toFixed(2)}%`);
console.log(`Classificacao: ${classificacao}`);
