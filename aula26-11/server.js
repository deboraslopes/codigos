const express = require("express") 
const app = express()
const bodyparser = require ("body-parser")
const PORT = 8080

const clientModel = require('./database/cliente')

const connection = require("./database/database")
connection.authenticate().then(()=>{
    console.log("Conexão com sucesso")
}).catch(()=>{
    console.log("ERRO!")
})

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.set('view engine', 'ejs')

app.get("/",(req, res)=>{
    var nome = "Débora";
    var idade = 39
    res.render("index",{
        nome: nome,
        idade: idade,
        empresa: "Softex",
        alunos: 100
    })
})

app.get("/sobre",(req, res)=>{
    res.send("Página Sobre")
})

app.get("/cadastrar",(req,res)=>{
    res.render("cadastrar")
})

app.post("/salvarcliente", (req, res)=>{
    var nome = req.body.nome
    var idade = req.body.idade

})

app.listen (PORT,() =>{
    console.log(`Servidor rodando na porta ${PORT}`)
})