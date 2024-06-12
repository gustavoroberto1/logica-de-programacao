import leia from "readline-sync";

const SENHA_PADRAO = "1234";
var senha = leia.question("DIGITE SUA SENHA");

if(senha !== SENHA_PADRAO){
    console.log("ACESSO NEGADO");
} else {
    console.log("ACESSO PERMITIDO");
}
