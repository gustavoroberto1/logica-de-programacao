var pai = [];
var mae = [];
for(var i = 0; i < 50; i++){
    pai[i] = parseInt(Math.random() * 100);
    mae[i] = parseInt(Math.random() * 100);
}

var filho = [];
for(var i = 0; i < 50; i++){
    if(i % 2 === 0){
        filho[i] = pai[i];
    }else {
        filho[i] = mae[i];
    }
}

console.log("[index] - [pai] - [mae] - [filho]")
for(var i = 0; i < 50; i++){
    console.log("["+i+"] - "+"[" + pai[i] + "] - " + "[" + mae[i] + "] - " +"[" + filho[i] + "]" )
}