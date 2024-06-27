import leia from 'readline-sync';

var numeroMagico;
var opcaoJogo = leia.keyInSelect(["PvP", "PvE"]);

if(opcaoJogo === 0){
    numeroMagico = leia.questionInt("DIGITE O NUMERO MAGICO: ", { hideEchoBack: true });
}else if(opcaoJogo === 1){
    var dificuldade = leia.keyInSelect(["FACIL", "MEDIA", "DIFICIL"]);
    switch(dificuldade){
        case 0:
            numeroMagico = parseInt(Math.random() * 10);
            break;
        case 1:
            numeroMagico = parseInt(Math.random() * 10000)
            break;
        case 2:
            numeroMagico = parseInt(Math.random() * 1000000)
            break;
    }
}

var tentativas = 0;
do {
    var palpite = leia.questionInt("DIGITE PALPITE: ");
    if(palpite > numeroMagico){
        console.log("NUMERO MAGICO E MENOR")
    }else if(palpite < numeroMagico) {
        console.log("NUMERO MAGICO E MAIOR")
    }else {
        console.log("ACERTOU MISERAVIIII")
    }

    tentativas++
} while(palpite !== numeroMagico);

console.log("VOCE PRECISOU DE "+ tentativas + " TENTIVAS PARA ACERTAR")