import leia from 'readline-sync'
import { exercicio01 } from './exercicio01.js';
import { exercicio02 } from './exercicio02.js';

var opcao = leia.keyInSelect(["Exercicio 01", "Exercicio 02"]) + 1;

switch(opcao){
    case 1: 
        exercicio01();
        break;
    case 2: 
        exercicio02();
        break;
}

