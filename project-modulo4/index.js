const express = require ('express')
const repository = require ('./repository')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/jogos', (req, res) =>{
    res.send(repository.getJogos())
})

app.post('/jogos', (req, res) => {
    res.send(repository.createJogo(req.body))
})

app.put('/jogos', (req, res) => {
    const id = req.query.id;
    const jogo = req.body;
    res.send(repository.updateJogo(id, jogo))
})

app.delete('/jogos', (req, res) => {
    const id = req.query.id;
    res.send(repository.deleteJogo(id))
})

app.get('/', (req, res) =>{
    res.send('Cadastro de Jogos')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})