function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        do {
            var numeroGerado = gerarNumero(max, min)
            var jaGerou = verificarNumeroRepetido(vetor, numeroGerado);
        } while (jaGerou)
        vetor[i] = numeroGerado;
    }

    return vetor;
}

function gerarNumero(max, min) {
    return parseInt(Math.random() * (max - min)) + min;
}

function verificarNumeroRepetido(vetor, numeroGerado) {
    for (var j = 0; j < vetor.length; j++) {
        if (vetor[j] === numeroGerado) {
            return true;
        }
    }
    return false;
}

var flhjfd = preencherVetor(100, 50, 160)
console.log(flhjfd)