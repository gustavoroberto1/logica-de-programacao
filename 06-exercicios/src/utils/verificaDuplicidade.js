export function verificaDuplicidade(vetor) {
    for (var i = 0; i < vetor.length; i++) {
        for (var j = i; j < vetor.length; j++) {
            if (j !== i && vetor[i] === vetor[i]) {
                return true;
            }
        }
    }
    return false;
}