import { preencherVetor } from './utils/preencherVetor.js'
import { verificaDuplicidade } from './utils/verificaDuplicidade.js'

export function exercicio02() {
    var vetor = preencherVetor(10, 0, 50);
    var temDuplicidade = verificaDuplicidade(vetor);
    console.log(vetor)
    if (temDuplicidade) {
        console.log("TEM DUPLICIDADE")
    } else {
        console.log("NÃO TEM DUPLICIDADE")
    }
}



