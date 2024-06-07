import leia from "readline-sync"

var senha = leia.question("DIGITE A SENHA: ");

switch(senha){
    case "1234":
        console.log("PERMITIR ACESSO!!")
        break;
    default:
        console.log("ACESSO NEGADO");
}