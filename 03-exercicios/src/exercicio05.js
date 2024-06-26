var contador = 1;
do{
    var valor = contador * 0.33;
    console.log(contador + " COPIA = " + valor.toFixed(2))
    contador++;
}while(contador <= 500);