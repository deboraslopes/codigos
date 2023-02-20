const express = require('express')
const app = express()
const bodyParser = require("body-parser")


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send("Pagina principal")
})

app.get('/cadastrar',(req,res)=>{
    res.render('cadastrar')
})

app.post("/salvarlivros",(req,res)=>{
    let titulo = req.body.nome
    let autor = req.body.autor
    let isbn = req.body.isbn

    res.send("Formulario recebido " + titulo + " autor " + autor + " isbn " + isbn)
})

app.listen(8080,()=>{
    console.log("SERVIDOR RODANDO!")
})