import { preencherVetor } from './utils/preencherVetor.js'
import { obterItensVetor } from './utils/obterItensVetor.js'

export function exercicio01() {
    var v1 = preencherVetor(9, 0, 100);
    var v2 = preencherVetor(9, 0, 100);
    var v3 = preencherVetor(9, 0, 100);

    var vResultado = [];
    vResultado = obterItensVetor(v1, vResultado, 0, 2);
    vResultado = obterItensVetor(v2, vResultado, 3, 5);
    vResultado = obterItensVetor(v3, vResultado, 6, 8);

    console.log(v1)
    console.log(v2)
    console.log(v3)
    console.log(vResultado)
}

