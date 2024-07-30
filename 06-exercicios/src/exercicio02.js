import readline from 'readline-sync';

var nota1 = readline.questionFloat("INFORME A PRIMEIRA NOTA: ")
var nota2 = readline.questionFloat("INFORME A SEGUNDA NOTA: ")
var nota3 = readline.questionFloat("INFORME A TERCEIRA NOTA: ")
var nota4 = readline.questionFloat("INFORME A QUARTA NOTA: ")
var nota5 = readline.questionFloat("INFORME A QUINTA NOTA: ")
var nota6 = readline.questionFloat("INFORME A SEXTA NOTA: ")

var maiorNota = Math.max(nota1, nota2, nota3, nota4, nota5, nota6);
var menorNota = Math.min(nota1, nota2, nota3, nota4, nota5, nota6);;

// if(nota2 > maiorNota){
//     maiorNota = nota2;
// }
// if(nota3 > maiorNota){
//     maiorNota = nota3
// }
// if(nota4 > maiorNota){
//     maiorNota = nota4;
// }
// if(nota5 > maiorNota){
//     maiorNota = nota5;
// }
// if(nota6 > maiorNota){
//     maiorNota = nota6;
// }

// if(nota2 < menorNota){
//     maiorNota = nota2;
// }
// if(nota3 < menorNota){
//     maiorNota = nota3
// }
// if(nota4 < menorNota){
//     maiorNota = nota4;
// }
// if(nota5 < menorNota){
//     maiorNota = nota5;
// }
// if(nota6 < menorNota){
//     maiorNota = nota6;
// }

var soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
soma -= menorNota + maiorNota;

var media = soma / 4;

console.log("A MÉDIA É : " + media)
