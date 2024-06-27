import leia from 'readline-sync';

var teste = leia.questionNewPassword("DIGITE NUMERO");
console.log(teste)
var numero = leia.questionInt("DIGITE UM NUMERO: ")
var resultado = 1;

while(numero > 0){
    resultado = resultado * numero;
    numero--;
}

console.log("FATORIAL E: " + resultado);