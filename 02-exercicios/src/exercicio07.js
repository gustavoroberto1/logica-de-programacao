import leia from "readline-sync";

var salario = leia.questionFloat("INFORME O SALARIO: ");
var emprestimo = leia.questionFloat("INFORME O VALOR DO EMPRESTIMO: ");
var parcelas = leia.questionInt("NUMERO DE PARCELAS: ");

var valorParcela = emprestimo / parcelas;
var limite = salario * 0.30;

var formatador = new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "meter"
})

console.log("-----------------------")
console.log("LIMITE: " + formatador.format(limite));
console.log("VALOR EMPRESTIMO " + formatador.format(emprestimo) + " EM " + parcelas + "x")
console.log("VALOR PARCELA: " + formatador.format(valorParcela))

var mensagem = (valorParcela <= limite) ? "EMPRESTIMO APROVADO" : "EMPRESTIMO REPROVADO";
console.log(mensagem);
