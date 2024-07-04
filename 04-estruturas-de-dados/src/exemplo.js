import leia from 'readline-sync'
var lista = [];

var i = 4;
while(i >= 0){
    lista[i] = leia.question("DIGITE UM NOME: ")
    i--;
}
var soma = 0;
for(var j = 0; j < lista.length; j++){
    console.log(lista[j])
    soma += lista[j]
}

