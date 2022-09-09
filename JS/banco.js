function banco(conta, saldo, tipo, agencia) {
    ;(this.conta = conta),
      (this.saldo = saldo),
      (this.tipo = tipo),
      (this.agencia = agencia)
  
    this.buscarSaldo = function () {
      return `Saldo: R$ ${this.saldo}`
    }
  
    this.depositar = function (valorDeposito) {
      this.saldo += valorDeposito
      return `Depósito realizado com sucesso.`
    }
  
    this.sacar = function (valorSaque) {
      this.saldo -= valorSaque
      return `Saque realizado com sucesso.`
    }
  
    this.numConta = function () {
      console.log(this.conta)
    }
  }
  
  let minhaConta = new banco('55522233-9', 1350, 'poupanca', 09)
  
  minhaConta.numConta() //'55522233-9'
  console.log(minhaConta.buscarSaldo()) //"Saldo: R$ 1350"
  console.log(minhaConta.depositar(400))
  console.log(minhaConta.sacar(50))
  console.log(minhaConta.buscarSaldo()) //"Saldo: R$ 1700"