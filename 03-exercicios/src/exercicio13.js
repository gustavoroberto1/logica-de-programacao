import leia from 'readline-sync';

var decimal = leia.questionInt("DIGITE UM NUMERO");
var binario = '';

while(decimal >= 1){
    var result = parseInt(decimal / 2);
    var resto = decimal % 2;
    decimal = result;
    binario = resto + binario;
}

console.log(binario)