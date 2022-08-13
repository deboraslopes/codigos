//Questão 06

function escreverCartao (titulo, nome, sobrenome){
    return (titulo + nome.concat(sobrenome))
}

var titulo = "Bem vindo! "
var nome = "Carlos"
var sobrenome = " dos Santos"

console.log (escreverCartao(titulo, nome, sobrenome))