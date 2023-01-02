const express = require ('express')
const app = express()

app.get('/user',(req, res) => {
    res.send('Metodo GET - Listar usuários')
});

app.post('/user',(req, res) => {
    res.send('Metodo POST - Incluir usuários')
});

app.put('/user/:id',(req, res) => {
    res.send(`Metodo PUT - Editar o usuário ${req.params.id}`)
});

app.delete('/user/:id',(req, res) => {
    res.send(`Metodo DELETE - Excluir o usuário ${req.params.id}`)
});

app.listen(3000, () => {
    console.log('Rodando projeto')
});

//Para rodar o código deve iniciar o servidor node server.js
//Para testar usar http://localhost:3000/
// Para testar PUT e DELETE utilizar o POSTMAN ou INSOMNIA