import leia from "readline-sync";

var mes = leia.questionInt("DIGITE VALOR QUE REPRESENTE MES");
switch (mes) {
    case 2:
        console.log("28/29 DIAS");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 DIAS");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 DIAS");
        break;
    default:
        console.log("MES INVALIDO");
}