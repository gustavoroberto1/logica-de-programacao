package exercicio;

import java.util.Scanner;

public class Exercicio05 {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
    
        System.out.println("INFORME A TEMPERATURA EM ºC: ");
        double celsius = s.nextDouble();
        
        double farenhait = (1.8 * celsius) + 32;
        double kelvin = celsius + 273.15;
        
        System.out.println("CELCIUS: " + celsius + "ºC");
        System.out.println("FARENHAIT: " + farenhait + "ºF");
        System.out.println("KELVIN: " + kelvin + "ºK");
    }
}
