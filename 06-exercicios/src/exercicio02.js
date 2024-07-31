import leia from 'readline-sync';
var notas = [];
for (var i = 0; i < 6; i++) {
    notas.push(leia.questionInt(`DIGITE A ${i + 1} NOTA`));
}

var notasO = notas.sort((a, b) => a - b);
var soma = 0;
for (var i = 1; i < 5; i++) {
    soma += notasO[i];
}

var media = soma / 4;
console.log(`MEDIA: ${media}`);
