const { response } = require('express')
const express = require ('express')
const index = express()

const db = require('./models/db')

index.get("/", async(require, response) => {
    response.send("Página Inicial - Débora")
})

index.listen(8080, () =>{
    console.log("Servidor iniciado com sucesso")
})