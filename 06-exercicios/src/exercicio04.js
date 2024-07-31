import leia from 'readline-sync';

var texto = leia.question("DIGITE UM TEXTO: ")
texto = texto.toLowerCase();
var contadorVogais = 0;

for (var i = 1; i < texto.length; i++) {
    if (
        texto[i] === 'a' ||
        texto[i] === 'e' ||
        texto[i] === 'i' ||
        texto[i] === 'o' ||
        texto[i] === 'u') {
        contadorVogais++;
    }
}

console.log(`A PALAVRA/TEXTO TEM ${contadorVogais} vogais`)
