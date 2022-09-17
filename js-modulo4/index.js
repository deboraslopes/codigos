const { response } = require('express')
const express = require('express')
const app = express()
app.get("/home", (require, response) => {
    response.send("Método GET")
})

app.listen(8080,()=>{
    console.log ("Servidor inciado com sucesso!")
})
