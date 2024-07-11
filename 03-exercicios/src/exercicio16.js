import leia from 'readline-sync';

var qtdM = 0, qtdF = 0; somaTodasAlturas = 0;
var somaAlturaFemin = 0; maiorAltura, menorAltura;

for (var i = 0; i < 10; i++) {
    var genero = leia.keyInSelect(["MASCULINO", "FEMININO"]) + 1;
    var altura = leia.questionFloat("INFORME SUA ALTURA: ");
    somaTodasAlturas += altura;

    if (genero === 2) {
        somaAlturaFemin += altura;
        qtdF++
    }

    if (genero === 1) {
        qtdM++
    }

    if (!maiorAltura || altura > maiorAltura) {
        maiorAltura = altura;
    }

    if (!menorAltura || altura < menorAltura) {
        menorAltura = altura;
    }

}