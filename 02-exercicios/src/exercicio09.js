import leia from "readline-sync";

var nome = leia.question("INFORME O SEU NOME: ");
var salario = leia.questionFloat("INFORME O SALARIO: ");
var deps = leia.questionInt("INFORME QTD DEPENDENTES: ");

switch (deps) {
    case 0:
        salario += salario * 0.02;
        break;
    case 1:
        salario = salario * 1.05;
        break;
    case 2:
        salario = salario * 1.07;
        break;
    case 3:
        salario = salario * 1.10;
        break;
    default:
        salario = salario * 1.15;
}

console.log(nome + " SEU SALARIO É: R$" + salario.toFixed(2));

