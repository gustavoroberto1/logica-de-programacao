import leia from 'readline-sync'

var numero = leia.questionInt("DIGITE UM NÚMERO: ")
for(var inicio = 0; inicio <= numero; inicio++){
    console.log(inicio)
}