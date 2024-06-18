import leia from 'readline-sync';

var timeA = leia.questionInt("INFORME QTD GOLS TIME A ");
var timeB = leia.questionInt("INFORME QTD GOLS TIME B ");

var diferenca = Math.abs(timeA - timeB);
switch(diferenca){
    case 0:
        console.log("EMPATE")
        break;
    case 1:
    case 2:
    case 3:
        console.log("JOGO NORMAL");
        break;
    default: 
        console.log("GOLEADA")
}