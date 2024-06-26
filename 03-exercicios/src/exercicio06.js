import leia from 'readline-sync';

var numero = leia.questionInt("DIGITE UM NUMERO");
for(var i = 1; i <= 10; i++){
    var result = i * numero;
    console.log(numero + " X " + i + " = " + result);
}
