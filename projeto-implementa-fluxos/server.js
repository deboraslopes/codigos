const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')
const porta = 8080

const Paciente = require ('./database/pacientes')
const conecta = require ('./database/database')
const paciente = require('./database/pacientes')
const { json } = require('body-parser')


conecta.authenticate().then(()=>{
    console.log("Conexão com banco realizada com sucesso")
}).catch(()=>{
    console.log("Erro na conexão do banco de dados")
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send('Home')
})

app.post('/novopaciente', (req, res) => {
    var id = req.body.id
    var nome = req.body.nome
    var idade = req.body.idade
    Paciente.create({
        id : id,
        nome : nome,
        idade : idade
    }).then(()=>{
        res.json("Paciente cadastrado com sucesso")})
})

app.get('/pacientes', async(req, res) => {
    await Paciente.findAll()
    .then((dataHome) => {
        return res.json({
            erro: false,
            dataHome : dataHome
        })
    })
})

app.delete('/pacientes/:id', async(req, res) =>{
    await Paciente.destroy({
        where:{
            id: req.params.id
        }
    })
    res.status(200).json({message: 'Paciente excluido com sucesso.'})
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})