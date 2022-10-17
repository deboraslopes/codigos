const { response } = require('express')
const express = require ('express')
const index = express()
const User = require('./models/User')

index.use(express.json())

index.get("/", async(require, response) => {
    response.send("Página Inicial - Débora")
})

index.post("/cadastrar", async(require, response) => {
   // console.log(require.body);

    await User.create(require.body)
    .then(() =>{
        return response.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        })
    }).catch(() =>{
        return response.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado!"
        })

    })

   // response.send("Página Cadastro")
})

index.listen(8080, () =>{
    console.log("...Servidor iniciado com sucesso")
})