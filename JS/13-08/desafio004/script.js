function obterFrase(){

    var frases = new Array ();
    frases[0] = "Não trate como constante quem te trata como variável";
    frases[1] = "Achei o erro, tu tá programando!";
    frases[2] = "Existem apenas 10 tipos de pessoas. As que entendem binário, e aquelas que não.";
    frases[3] = "You are my CSS to my HTML";
    frases[4] = "A questão não é saber os códigos ou linhas de comando, é saber o que fazer com eles.";
    frases[5] = "Hora de CODAR!";
    
    var i = Math.floor(6*Math.random())
    document.getElementById("frase").innerHTML = "<p>" + frases[i] + "</p>";
    }
