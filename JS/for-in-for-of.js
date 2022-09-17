
let fruta = {nome: 'Banana', preço: 2.99, unidade: 1}
let aparelhos = ['fone', 'microfone', 'mouse']


function propriedades(objeto){
    for (let i in objeto) {
    console.log (i)
}}

function elementos(array){
    for (let j in array) {
        console.log(array[j])
    }
}

propriedades(fruta)
elementos(aparelhos)