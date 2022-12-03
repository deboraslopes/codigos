const express = require ('express')
const app = express()
const PORT = 8080

const Produtos = require ()

app.get('/', (req, res) => {
    res.send("Página Principal da Aplicação")
})

app.post('/entradaproduto',(req, res) =>{
    var produto = req.body.produto
    var valor = req.body.price
    var qntd = req.body.qntd
    Produtos.create({
        produto: produto,
        valor: valor,
        qntd: qntd
    }).the(() => {
        res.redirect("/")
    })
})

app.get('/sobre', (req, res) => {
    res.send("Rota Sobre")
})

app.get('/exibir', (req, res) =>{
    res.send("Rota Exibir")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})