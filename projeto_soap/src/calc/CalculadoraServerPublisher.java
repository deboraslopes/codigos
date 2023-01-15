package calc;

import javax.xml.ws.Endpoint;
public class CalculadoraServerPublisher {
    public static void main(String[] args) {
        {
            Endpoint.publish("http://192.168.0.1:9976/calc",
            new CalculadoraServerImpl());
        }
    }
}