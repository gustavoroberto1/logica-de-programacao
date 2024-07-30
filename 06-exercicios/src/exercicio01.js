import readline from 'readline-sync';

var num1 = readline.questionInt("INFORME O PRIMEIRO NUMERO: ")
var num2 = readline.questionInt("INFORME O SEGUNDO NUMERO: ")
var num3 = readline.questionInt("INFORME O TERCEIRO NUMERO: ")

if(num1 < num2 && num2 < num3){
  console.log(num1, num2, num3);
}else if(num1 < num3 && num3 < num2){
  console.log(num1, num3, num2);
}else if(num2 < num1 && num1 < num3){
  console.log(num2, num1, num3);
}else if (num2 <= num3 && num3 <= num1) {
  console.log(num2, num3, num1);
} else if (num3 <= num1 && num1 <= num2) {
  console.log(num3, num1, num2);
} else {
  console.log(num3, num2, num1);
}

/**
 * 
 *  let temp;
    
    // Garantir que a seja o menor ou igual ao b
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    
    // Garantir que a seja o menor ou igual ao c
    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }
    
    // Garantir que b seja o menor ou igual ao c
    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
 */