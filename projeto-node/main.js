const express = require ('express')
const app = express()

app.get('/get', (req, res) =>{
    res.send("Requisição do tipo GET")
})


app.post("/post", (req, res)=>{
    res.send("Requisição do tipo POST")
})

app.listen(8080, () =>{
    console.log("Servidor escutando na porta 8080")
})

