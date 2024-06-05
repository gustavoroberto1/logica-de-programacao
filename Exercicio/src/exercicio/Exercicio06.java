package exercicio;

public class Exercicio06 {
    public static void main(String[] args) {
        int A = 5;
        int B = 100;
        
        int aux = A;
        A = B;
        B = aux;
        
        System.out.println("VALOR DE A:" + A);
        System.out.println("VALOR DE B:" + B);
    }
}
