import leia from "readline-sync";

var valorProduto = leia.questionFloat("INFORME O VALOR DO PRODUTO");

var umReal = leia.questionInt("QTD MOEDAS R$1 ");
var cinquenta = leia.questionInt("QTD MOEDAS R$0,50 ");
var vinteCinco = leia.questionInt("QTD MOEDAS R$0,25 ");
var dez = leia.questionInt("QTD MOEDAS R$0,10 ");
var cinco = leia.questionInt("QTD MOEDAS R$0,05 ");

var total = (umReal * 1) + (cinquenta * 0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco * 0.05)

console.log("VALOR DO PRODUTO: " + valorProduto);
console.log("TOTAL NO PORQUINHO: " + total)

var mensagem = total >= valorProduto ? "DA PARA COMPRAR O PRODUTO!" : "CHORAA BOY, NÃO VAI DA NÃO!";
console.log(mensagem);