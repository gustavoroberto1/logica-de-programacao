import leia from 'readline-sync';
var nomes = [];
var medias = [];

var nomeMaiorMedia;
var maiorMedia;

function solicitaNotas(qtd) {
    var somaNotas = 0.0;
    for (var j = 1; j <= qtd; j++) {
        somaNotas += leia.questionFloat("DIGITE NOTA 0" + j + ":");
    }
    var media = somaNotas / qtd;
    return media;
}

var i = 0;
while (i < 3) {
    nomes[i] = leia.question("DIGITE O NOME " + (i + 1) + ": ");
    medias[i] = solicitaNotas(3);
    i++;
}

for (var i = 0; i < medias.length; i++) {
    if (!maiorMedia || medias[i] > maiorMedia) {
        maiorMedia = medias[i];
        nomeMaiorMedia = nomes[i];
    }
}

console.log("ESTUDANTE COM MAIOR MÉDIO FOI " + nomeMaiorMedia + " COM " + maiorMedia)

