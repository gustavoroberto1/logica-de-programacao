import leia from 'readline-sync'

var numero = leia.questionInt("DIGITE ATE QUAL VALOR QUER: ");
var anterior = 0, atual = 1, proximo, resultado = "0 - 1";

for(var i = 2; i < numero; i++){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    resultado = resultado + " - " + proximo;
}
console.log(resultado);