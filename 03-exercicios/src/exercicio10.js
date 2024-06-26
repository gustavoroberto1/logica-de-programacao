var alturaValentina = 1.50;
var alturaJoao = 1.40;
var anos = 0;

while(alturaValentina >= alturaJoao){
    alturaJoao += 0.03;
    alturaValentina += 0.02;
    anos++;
}

console.log("VALENTINA: " + alturaValentina.toFixed(2))
console.log("JOAO: " + alturaJoao.toFixed(2))
console.log("DEMORA " + anos + " PARA JOÃO MAIOR QUE VALENTINA")