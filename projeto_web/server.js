const express = require ('express')
const app = express()
porta = 3000

app.use(express.json())

app.get('/', (req, res) =>{
    return res.json({titulo: "GET rodando"})
})

app.listen(porta, () =>
    console.log(`Servidor rodando na porta ${porta}`)
)