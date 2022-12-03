const express = require ('express')
const app = express()
const PORT = 8080
app.set("view engine", "ejs")

const connection = require("./database/database")

connection.authenticate().then(()=>{
    console.log("Conexão com sucesso")
}).catch(()=>{
    console.log("Erro na conexão")
})

const Produtos = require ("./database/produtos")

app.get('/', (req, res) => {
    res.send("Página Principal da Aplicação")
})

app.get('/cadastrar', (req, res) => {
    res.render("cadastrar")
})

app.post('/entradaproduto',(req, res) =>{
    var nome = req.body.nome
    var valor = req.body.valor
    var qntd = req.body.qntd
    Produtos.create({
        nome: nome,
        valor: valor,
        qntd: qntd
    }).the(() => {
        res.redirect("/")
    })
})

app.get('/sobre', (req, res) => {
    res.send("Escrever sobre a loja")
})

app.get('/exibir', (req, res) =>{
    res.send("Exibir produtos cadastrados")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})