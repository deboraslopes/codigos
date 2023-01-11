const express = require ('express')
const app = express()

const Aluno = require("./database/aluno")
 
//rota POST
app.post('/cadastrar', (req, res) =>{
    var id = req.body.id
    var nome = req.body.nome
    var matricula = req.body.matricula
    Aluno.create({
        id:id,
        nome: nome,
        matricula: matricula
    }).then(()=>{
        res.json("Aluno cadastrado com sucesso") //mensagem sucesso
    }) 
})

//rota GET - listar
app.get('/aluno', (req, res) => {
    return res.json(Aluno) //retorno com lista de alunos
})

//rota PUT - editar
app.put('/aluno/:2', (req, res) => {
    const {Aluno} = req.params // recupera o registo de id=2 com os dados
    const {nome} = req.nome

    Aluno[2] = nome // sobrepõe o index obtido na rota de acordo com o novo valor

    return res.json(Aluno) // retorna novamente os Alunos atualizados após o update
})

//rota DELETE - excluir
app.delete('/aluno/:12', (req, res) => {
    const {Aluno} = req.params // recupera o registo de id=12 com os dados
    Aluno.splice(id, 12) // percorre o vetor até o index selecionado e deleta uma posição no array
        
    return res.send();  // retorna os dados após exclusão
    
    })