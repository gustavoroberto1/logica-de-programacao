export function preencherVetor(tamanhoVetor, min, max) {
    var vetor = [];
    for (var i = 0; i < tamanhoVetor; i++) {
        vetor[i] = parseInt(Math.random() * (max - min)) + min;;
    }

    return vetor;
}