import leia from 'readline-sync';

var palavra = leia.question("DIGITE PALAVRA OU TEXTO: ");
palavra = palavra.replaceAll(" ", "");
var palavraInvertida = "";

for (var i = 0; i <= palavra.length - 1; i++) {
    palavraInvertida = palavra[i] + palavraInvertida;
}

if (palavra === palavraInvertida) {
    console.log("É PALINDROMO")
} else {
    console.log("NÃO É PALINDROMO")
}