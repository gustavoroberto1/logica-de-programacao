import leia from 'readline-sync';

console.log("INFORME O VALOR DA SUA DOAÇÃO");
console.log("1 - R$10,00")
console.log("2 - R$25,00")
console.log("3 - R$50,00")
console.log("4 - Outros valores");

var opcao = leia.question("INFORME A OPCAO");
switch(opcao){
    case "1":
        console.log("Você doou R$10,00! Muito Obrigado!!!")
        break;
    case "2":
        console.log("Você doou R$25,00! Muito Obrigado!!!")
        break;
    case "3":
        console.log("Você doou R$50,00! Muito Obrigado!!!")
        break;
    case "4":
        var valor = leia.question("INFORME O VALOR QUE DESEJA DOAR");
        console.log("Você doou R$" + valor +"! Muito Obrigado!!!");
        break;
    default: 
        console.log("OPCAO INVALIDA")
}

