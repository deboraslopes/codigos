package calc;

import javax.xml.namespace.QName;

public class Main {
    public static void main(String[] args) throws Exception {
        URL url = new URL("http://192.168.0.1:9976/calc?wsdl");
        QName qname = new QName("http://calc/", "CalculadoraServerImplService");
        Service ws = Service.create(url, qname);
        CalculadoraServer calc = ws.getPort(CalculadoraServer.class);

        System.out.println("Soma: " + calc.soma(169, 13));
        System.out.println("Subtração: " + calc.sub(169, 13));
        System.out.println("Multiplicação: " + calc.mult(169, 13));
        System.out.println("Divisão: " + calc.div(169, 13));
    }
}