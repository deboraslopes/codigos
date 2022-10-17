const { response } = require('express')
const express = require('express')
const index = express()
const Games = require('./models/Games')

index.use(express.json());

index.get("/", async(require, response) =>{
    response.send("|| Home ||")
})

index.post("/game", async(require, response) =>{
    console.log(require.body)

    await Games.create(require.body)
    .then(() => {
        return response.json({
            erro: false,
            mensagem: "Jogo cadastrado com sucesso!"
        })
    }).catch(() =>{
        return response.status(400).json({
            erro: true,
            mensagem: "Jogo não cadastrado!"
        })
    })
})

index.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!")
})