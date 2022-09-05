function situacao(){
    var nota1 = document.getElementById('campo1').value
    var nota2 = document.getElementById('campo2').value
    var nota3 = document.getElementById('campo3').value
    var resultado = document.getElementById('resultado')

    var media = (Number(nota1) + Number (nota2) + Number (nota3))/3 //usando operador de atribuição '='

    resultado = media >= 7 ? resultado.innerHTML = "APROVADO!" :  resultado.innerHTML = "REPROVADO!" //usando operador ternário

}

function qntfalta(){
    var n1 = document.getElementById('campo4').value
    var n2 = document.getElementById('campo5').value
    var nota_falta = document.getElementById('nota_falta')

    nota_falta.innerHTML = 21 - n1 - n2

}