//Com os conceitos aprendidos, crie um programa de calculadora que: 

//receba dois valores, que devem ser salvos em variáveis; 
//o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
//com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
//se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

let teclado = require('prompt-sync')();

console.log('Digite o primeiro valor')
let valor1 = teclado()

console.log('Digite o segundo valor')
let valor2 = teclado()
