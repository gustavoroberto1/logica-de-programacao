import leia from "readline-sync";

var numero = leia.questionInt("DIGITE UM NUMERO: ");

if(numero % 2 === 0){
    console.log("NUMERO E PAR!!")
}else {
    console.log("NUMERO E IMPAR!!")
}
