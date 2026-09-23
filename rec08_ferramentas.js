const entrada = require('readline-sync');

const ferramentas = [];

for (let i = 0; i < 4; i++) {
    const nome = entrada.question(`Digite o nome da ferramenta ${i + 1}: `);
    const quantidade = entrada.questionInt("Digite a quantidade disponivel: ");
    const minimo = entrada.questionInt("Digite a quantidade minima: ");

    const ferramenta = {
        nome: nome,
        quantidade: quantidade,
        minimo: minimo
    };

    ferramentas.push(ferramenta);
}

console.log("\n--- RELATORIO DE ESTOQUE ---");

for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];

    let situacao;

    if (ferramenta.quantidade < ferramenta.minimo) {
        situacao = "REPOR";
    } else {
        situacao = "ESTOQUE SUFICIENTE";
    }

    console.log(`Ferramenta: ${ferramenta.nome}`);
    console.log(`Quantidade: ${ferramenta.quantidade}`);
    console.log(`Minimo: ${ferramenta.minimo}`);
    console.log(`Situacao: ${situacao}`);
}

