package exercicio;

import java.util.Scanner;

public class Exercicio04 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        System.out.println("DIGITE O TOTAL DE ELEITORES: ");
        double eleitores = s.nextDouble();
        
        System.out.println("DIGITE QTD VOTOS NULOS: ");
        double nulos = s.nextDouble();
        
        System.out.println("DIGITE QTD VOTOS BRANCOS: ");
        double brancos = s.nextDouble();
        
        System.out.println("DIGITE QTD VOTOS VÁLIDOS: ");
        double validos = s.nextDouble();
        
        double nuloPercentual = (nulos / eleitores) * 100;
        double brancoPercentual = (brancos / eleitores) * 100;
        double validosPercentual = (validos / eleitores) * 100;
        
        System.out.println("PORCENTAGEM NULOS: " + nuloPercentual + "%");
        System.out.println("PORCENTAGEM BRANCOS: " + brancoPercentual+ "%");
        System.out.println("PERCENTAGEM VÁLIDOS: " + validosPercentual+ "%");    
    }
}
