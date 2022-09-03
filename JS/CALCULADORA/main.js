function calculadora(){
    var n1 = document.getElementById('campo1').value
    var n2 = document.getElementById('campo2').value
    var resultado = document.getElementById('resultado')
    var calc = document.getElementById('operador').value

    var soma = Number(n1) + Number(n2)
    var subt = Number(n1) - Number(n2)
    var mult = Number(n1) * Number(n2)
    var div = Number(n1) / Number(n2)

    if(calc == '+'){
        resultado.innerHTML = soma
    }else if(calc == '-'){
        resultado.innerHTML = subt
    }else if(calc == '*'){
        resultado.innerHTML = mult
    }else if(calc == '/'){
        resultado.innerHTML = div
    }else{
        resultado.innerHTML = 'ERRO'
    }
}