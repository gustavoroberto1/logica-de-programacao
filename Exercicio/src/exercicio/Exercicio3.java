package exercicio;

import java.util.Scanner;

public class Exercicio3 {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
        System.out.println("DIGITE A QUANTIDADE DE ANOS");
        int anos = leia.nextInt();
        System.out.println("DIGITE A QUANTIDADE DE MESES");
        int meses = leia.nextInt();
        System.out.println("DIGITE A QUANTIDADE DE DIAS");
        int dias = leia.nextInt();
        
        int totalDias = (anos * 365) + (meses * 30) + dias;
        
        System.out.println("VOCÊ TEM " + totalDias + " DIAS DE VIDA");
        
    }
}
