import leia from 'readline-sync'
// IF/ELSE
// var numero = 0;
// if (numero > 0) {
//     console.log("NUMERO POSITIVO...");
// } else if (numero < 0) {
//     console.log('NUMERO NEGATIVO...')
// } else {
//     console.log('O NUMERO É ZERO.')
// }

// var x = 10;
// if(x < 100){
//     console.log("MENOR QUE CEM");
// }

// if(x < 1000){
//     console.log("MENOR QUE MIL");
// }

var codigoErro = leia.questionInt("DIGITE O CÓDIGO DO ERRO: ");
switch (codigoErro){
    case 400:
    case 401:
    case 404:
        console.log("HTTP CODE ERROR APLICAÇÃO")
        break;
    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE - ERROR DE SERVIDOR")
        break;
    default: 
        console.log("NÃO É ERRO")
        break;
}