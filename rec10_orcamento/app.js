const entrada = require('readline-sync');

const {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
} = require('./funcoesOrcamento');

const cliente = entrada.question("Digite o nome do cliente: ");
const valorMateriais = entrada.questionFloat(
    "Digite o valor dos materiais: R$ "
);
const horas = entrada.questionFloat(
    "Digite a quantidade de horas de servico: "
);

const maoDeObra = calcularMaoDeObra(horas);
const total = calcularTotal(valorMateriais, horas);
const desconto = verificarDesconto(total);

console.log("\n--- ORCAMENTO TECNICO ---");
console.log(`Cliente: ${cliente}`);
console.log(`Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mao de obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situacao: ${desconto}`);
