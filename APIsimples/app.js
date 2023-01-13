const express = require ('express')
const app = express()
const bodyParser = require ('body-parser')

const routes = require ('./rotas/rotas')
routes(app)

const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})