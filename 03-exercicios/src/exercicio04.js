import leia from 'readline-sync'

var menor, maior;
for(var i = 0; i < 15; i++){
    var num = leia.questionInt("DIGITE UM NUMERO " + (i+1) +": ");

    if(i === 0){
        menor = num;
        maior = num
    }

    if(num < menor) {
      menor = num;  
    }

    if(num > maior){
        maior = num;
    }
}

console.log("MAIOR: " + maior);
console.log("MENOR: " + menor);

