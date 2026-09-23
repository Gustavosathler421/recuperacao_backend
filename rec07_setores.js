const entrada = require('readline-sync');

const setores = [];

for (let i = 0; i < 6; i++) {
    const setor = entrada.question(`Digite o nome do setor ${i + 1}: `);

    setores.push(setor);
}

console.log("\n--- SETORES DA FABRICA ---");

for (let i = 0; i < setores.length; i++) {
    console.log(`${i + 1} - ${setores[i]}`);
}

