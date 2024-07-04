var lista = [];
var maioresDez = [];

for(var i = 0; i < 10; i++){
    lista.push(parseInt(Math.random() * 20));
}

for(var i = 0; i < lista.length; i++){
    if(lista[i] > 10){
        maioresDez.push(lista[i]);
    }
}

console.log(lista)
console.log(maioresDez)
