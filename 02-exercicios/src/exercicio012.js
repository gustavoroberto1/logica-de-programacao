import leia from 'readline-sync';

var idade = leia.questionInt("INFORME SUA IDADE: ");
if(idade < 18){
    var permissao = leia.question("SEUS PAIS PERMITIRAM A VIAGEM\n 1 - SIM\n 2 - NAO\n")
    if(permissao === "1"){
        var nome = leia.question("INFORME SEU NOME: ");
        console.log("VOCE PODE VIAJAR TRANQUILO " + nome);
    }else if(permissao === "2"){
        console.log("NAO TEM PERMISSÃO PARA VIAJAR");
    }else {
        console.log("OPÇÃO INVALIDA");
    }
}else {
    var nome = leia.question("INFORME SEU NOME: ");
    console.log("VOCE PODE VIAJAR TRANQUILO " + nome);
}