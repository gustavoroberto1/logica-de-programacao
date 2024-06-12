import leia from "readline-sync";

var qtd = leia.questionInt("DIGITE A QTD DE MACAS: \n")

if(qtd >= 12) {
    var total = qtd * 0.25
    console.log("VALOR TOTAL R$"+ total.toFixed(2))
}else {
    var total = qtd * 0.30;
    console.log("VALOR TOTAL R$" + total.toFixed(2))
}
