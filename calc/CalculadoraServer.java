package calc;

import java.jws.WebMethod;
import java.jws.WebService;
import java.jws.soap.SOAPBinding;

import javax.swing.text.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface CalculadoraServer {
  @WebMethod float soma(float num1, float num2);
  @WebMethod float subtracao(float num1, float num2);
  @WebMethod float multiplicacao(float num1, float num2);
  @WebMethod float divisao(float num1, float num2);
}
