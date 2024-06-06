import leia from 'readline-sync'

var cor1 = leia.questionFloat("Digite primeiro valor ");
var cor2 = leia.questionFloat("Digite segundo valor ");
var cor3 = leia.questionFloat("Digite terceiro valor ");
var cor4 = leia.questionFloat("Digite quarto valor ");
var cor5 = leia.questionFloat("Digite quinto valor ");

var valorBruto = cor1 + cor2 + cor3 + cor4 + cor5;
var valorLiquido = valorBruto - (valorBruto * 0.25);

console.log("VALOR LIQUIDO: R$" + valorLiquido);
