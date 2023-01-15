package calc;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.soap.SOAPBinding;
import javax.jws.soap.SOAPBinding.Style;

@WebService
@SOAPBinding(style = Style.RPC)
public interface CalculadoraServer {
  @WebMethod float soma(float n1, float n2);
  @WebMethod float subtracao(float n1, float n2);
  @WebMethod float multiplicacao(float n1, float n2);
  @WebMethod float divisao(float n1, float n2);
}