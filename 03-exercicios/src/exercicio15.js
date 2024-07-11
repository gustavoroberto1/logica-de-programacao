import leia from 'readline-sync';

var nomeMaiorMedia;
var maiorMedia;

var i = 1;
while (i <= 3) {
    var nome = leia.question("DIGITE O NOME " + i + ": ");
    var somaNotas = 0.0;
    for (var j = 1; j <= 3; j++) {
        somaNotas += leia.questionFloat("DIGITE NOTA 0" + j + ":");
    }
    var media = somaNotas / 3;

    if (!maiorMedia || media > maiorMedia) {
        maiorMedia = media;
        nomeMaiorMedia = nome;
    }

    i++;
}

console.log("ESTUDANTE COM MAIOR MÉDIO FOI " + nomeMaiorMedia + " COM " + maiorMedia)

