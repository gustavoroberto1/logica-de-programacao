import leia from 'readline-sync'

var n1 = leia.questionInt("DIGITE PRIMEIRO NUMERO: ");
var n2 = leia.questionInt("DIGITE SEGUNDO NUMERO: ");
var passo = leia.questionInt("NUMERO DE PASSOS");

while(n1 <= n2){
    console.log(n1);
    n1 += passo;
}

for(var i = n1; i <= n2; i += passo){
    console.log(i);
}