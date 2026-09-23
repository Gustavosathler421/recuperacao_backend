const entrada = require('readline-sync');

const nomePeca = entrada.question("Digite o nome da peca: ");
const quantidade = entrada.questionInt("Digite a quantidade comprada: ");
const precoUnitario = entrada.questionFloat("Digite o preco unitario: R$ ");

const total = quantidade * precoUnitario;

console.log("\n--- RESUMO DA COMPRA ---");
console.log(`Peca: ${nomePeca}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Preco unitario: R$ ${precoUnitario.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);

