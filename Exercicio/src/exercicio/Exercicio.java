package exercicio;

import java.util.Scanner;

public class Exercicio {

    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("DIGITE A LARGURA");
        double largura = leia.nextDouble();
        System.out.println("DIGITE A ALTURA");
        double altura = leia.nextDouble();
        
        double result = largura * altura;
        
        System.out.println("AREA É IGUAL: " + result);   
    }
    
}
