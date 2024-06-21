import leia from 'readline-sync';

var numero = leia.questionInt("DIGITE UM NUMERO: ")
while(numero >= 0){
    console.log(numero);
    numero--;
}
