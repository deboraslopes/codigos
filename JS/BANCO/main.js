
function banco(conta, saldo, tipo, agencia) {
    (this.conta = conta),
    (this.saldo = saldo),
    (this.tipo = tipo),
    (this.agencia = agencia)
}

var minhaConta = new banco ('Caixa Econômica', 5.01, 'corrente','001');

this.buscarSaldo = function(){
    return 
}

document.getElementById("agencia-conta").innerHTML = 'Agência ' + minhaConta.agencia + "<br>";
document.getElementById("tipo-conta").innerHTML = 'Tipo da conta: ' + minhaConta.tipo + "<br>";
document.getElementById("saldo-conta").innerHTML = 'Saldo: R$ ' + minhaConta.saldo + "<br>";

