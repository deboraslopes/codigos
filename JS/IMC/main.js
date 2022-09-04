function imc(){
    var peso = document.getElementById("campo1").value
    var altura = document.getElementById("campo2").value
    var imc = peso/ (altura**2)

    if(imc < 20){
       alert ("Cuidado! você precisa aumentar seu peso")
    }else if(imc >= 18 && imc <= 25 ){
        alert("Parabens você está com o peso ideal!")
    }else if (imc > 25){
        alert("Cuidado! você precisa diminuir seu peso")
    }

}
    