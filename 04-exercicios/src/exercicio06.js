var minima = [];
var maxima = [];
var temp2;
for(var i = 0; i < 30; i++){
    var temp1 = parseInt(Math.random() * 23) + 12;
    do{
        temp2 = parseInt(Math.random() * 23) + 12;
    }while(temp2 === temp1);

    if(temp1 < temp2){
        minima.push(temp1);
        maxima.push(temp2);
    }else {
        maxima.push(temp1);
        minima.push(temp2);
    }
}

for(var i = 0; i < 30; i++){
    var dia = (i+1).toString().padStart(2,"0");
    console.log("DIA " + dia + ": MÁXIMA: " + maxima[i] + " MÍNIMA: "+ minima[i])
}