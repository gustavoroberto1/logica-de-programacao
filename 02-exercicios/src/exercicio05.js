import leia from "readline-sync";

var nomeC1 = leia.question("DIGITE O NOME \n");
var valorC1 = leia.questionFloat("DIGITE O VALOR \n")

var nomeC2 = leia.question("DIGITE O NOME \n");
var valorC2 = leia.questionFloat("DIGITE O VALOR \n")

var total = valorC1 + valorC2;
console.log("VALOR TOTAL: "+ total);

var media = total / 2;
console.log("VALOR MÉDIO: " + media);

var clientes = (valorC1 > 20) ? nomeC1 + "\n" : "";
clientes += (valorC2 > 20) ? nomeC2 : "";
console.log(clientes);
