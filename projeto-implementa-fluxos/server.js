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
    const {id, nome, idade} = req.body
    const novoPaciente = Paciente.create({id, nome, idade}) 
    res.status(200).json({message:'Paciente cadastrado com sucesso!'})
})

app.get('/pacientes', async(req, res) => {
    await Paciente.findAll()
    .then((Pacientes) => {
        return res.json({
            erro: false,
            Pacientes : Pacientes
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

app.put('/pacientes/:id', async(req, res) =>{
    const {id, nome, idade} = req.body
    await Paciente.update(
        {nome, idade},
        {
            where:{id: req.params.id}
        }
    )
    res.status(200).json({message: 'Dados do paciente atualizados!'})
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})