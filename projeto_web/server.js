const express = require ('express')
const app = express()
const bodyparser = require ('body-parser')
porta = 3000

const connection = require ("./database/database")

const Artigo = require ('./database/Artigo')

connection.authenticate().then(()=>{
    console.log("Conexão com banco realizada com sucesso")
}).catch(()=>{
    console.log("Erro na conexão do banco de dados")
})

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    return res.json({titulo: "GET rodando"})
})

app.post('/artigo', (req, res) =>{
    var titulo = req.body.titulo
    var conteudo = req.body.conteudo
    Artigo.create({
        titulo: titulo,
        conteudo: conteudo
    }).then(()=>{
        res.json("Artigo cadastrado com sucesso")
    })  
})

app.listen(porta, () =>
    console.log(`Servidor rodando na porta ${porta}`)
)