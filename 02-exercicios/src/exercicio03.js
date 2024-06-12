import leia from "readline-sync";

var placa = leia.question("DIGITE A PLACA \n");

var pos = placa.length - 1;
var ultimoDigito = placa.charAt(pos);

switch(ultimoDigito){
    case "0":
    case "1": 
        console.log("NÃO PODE RODAR NA SEGUNDA-FEIRA");
        break;
    case "2":
    case "3":
        console.log("NÃO PODE RODAR NA TERÇA-FEIRA");
        break;
    case "4":
    case "5":
        console.log("NÃO PODE RODAR NA QUARTA-FEIRA");
        break;
    case "6":
    case "7":
        console.log("NÃO PODE RODAR NA QUINTA-FEIRA");
        break;
    case "8":
    case "9":
        console.log("NÃO PODE RODAR NA SEXTA-FEIRA");
        break;
    default: 
        console.log("DIGITO INVALIDO!!!");
        break;
}