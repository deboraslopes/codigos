
function banco(conta, saldo, tipo, agencia) {
    (this.conta = conta),
    (this.saldo = saldo),
    (this.tipo = tipo),
    (this.agencia = agencia)
  
    var valorDeposito = document.getElementById("campo1").value
    if(valorDeposito > 0){
      saldo = saldo + valorDeposito
      alert ("Depósito realizado com sucesso")
   }else if (valorDeposito < 0){
       alert("Depósito não pode ser menor que zero")
   }

   var valorSaque = document.getElementById("campo2").value
   if(valorSaque > saldo){
     alert ("Saldo Insuficiente")
  }else if (valorSaque < saldo){
    saldo = saldo - valorSaque
      alert("Saque realizado com sucesso")
  }

}

let minhaConta = new banco ('Caixa Econômica', 5.01, 'corrente','001');


document.getElementById("saldo-conta").innerHTML = 'Saldo atual: ' + minhaConta.saldo + "<br>";
document.getElementById("tipo-conta").innerHTML = 'Tipo da conta: ' + minhaConta.tipo + "<br>";
document.getElementById("tipo-conta").innerHTML = 'Tipo da conta: ' + minhaConta.tipo + "<br>";


