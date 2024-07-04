var lista = [];
var lista2 = [];

// PREENCHE A PRIMEIRA LISTA
for(var i = 0; i < 10; i++){    
    lista[i] = parseInt(Math.random() * 1000) + 1000
}

// MANIPULAR AS LISTA
for(var i = 0; i < lista.length; i++){
    lista2[i] = lista[i] * 5;
}

console.log(lista)

