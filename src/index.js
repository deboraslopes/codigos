const { response } = require('express')
const express = require ('express')

const app = express()

app.get('/', (require, response) => {
    return response.send("Hello Word")

})


app.listen(3333,() => {
    console.log("Servidor iniciado na porta 3333: http://localhost:3333/ ")
})