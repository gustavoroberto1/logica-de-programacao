import leia from 'readline-sync';
var opcao = leia.keyInSelect([
    "C -> F",
    "C -> K",
    "K -> C",
    "K -> F",
    "F -> C",
    "F -> K",
], "SELECIONE A OPCAO") + 1;

var temp = leia.questionFloat("INFORME A TEMPERATURA: ")
switch (opcao) {
    case 1:
        var K = temp + 273.15
        console.log(`Valor em KELVIN: ${K}`);
        break;
    case 2:
        var C = temp - 273.15;
        console.log(`Valor em CELCIUS: ${C}`)
        break;
}