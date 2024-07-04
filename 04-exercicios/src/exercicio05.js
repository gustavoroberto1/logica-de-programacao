var lista = [1,2,3,4,5,6,7,8,9,10];

var inicio = 0;
var fim = lista.length - 1;
while(inicio < fim) {
    var aux = lista[inicio];
    lista[inicio] = lista[fim];
    lista[fim] = aux;

    inicio++;
    fim--;
}

console.log(lista)