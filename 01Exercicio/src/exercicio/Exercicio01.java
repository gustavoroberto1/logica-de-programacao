package exercicio;

import java.util.Scanner;

public class Exercicio01 {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        
        System.out.println("DIGITE UM NÚMERO: ");  
        int valor = s.nextInt();  
        
        int antecessor = valor - 1;  
        
        System.out.println("O ANTECESSOR É: " + antecessor);
    }
}
