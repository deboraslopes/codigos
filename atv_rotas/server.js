const express = require ('express')
const app = express()

const connection = require('./database')

connection.authenticate().then(() => {
    console.log("Conectado com sucesso")
}).catch(() => {
    console.log("Erro na conexão")
})