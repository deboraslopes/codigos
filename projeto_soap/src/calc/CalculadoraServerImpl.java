package calc;

import java.util.Date;
import javax.jws.WebService;

@WebService(endpointInterface = "calc.CalculadoraServer")
public class CalculadoraServerImpl implements CalculadoraServer {

  public float soma(float n1, float n2) {
    return n1 + n2;
  }

  public float subtracao(float n1, float n2) {
    return n1 - n2;
  }

  public float multiplicacao(float n1, float n2) {
    return n1 * n2;
  }

  public float divisao(float n1, float n2) {
    return n1 / n2;
  }

}