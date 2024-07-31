import leia from 'readline-sync';

var numero = [];
for (var i = 0; i < 3; i++) {
    numero[i] = leia.questionInt("INFORME O NUMERO " + (i + 1) + " : ");
}

var numeroOrdenado = numero.sort();
console.log(numeroOrdenado)
