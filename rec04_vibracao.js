const entrada = require('readline-sync');

const vibracao = entrada.questionFloat("Digite o nivel de vibracao (mm/s): ");

if (vibracao <= 3) {
    console.log(`Vibracao: ${vibracao} mm/s`);
    console.log("ESTAVEL");
} else if (vibracao <= 6) {
    console.log(`Vibracao: ${vibracao} mm/s`);
    console.log("ATENCAO");
} else {
    console.log(`Vibracao: ${vibracao} mm/s`);
    console.log("CRITICA");
}
