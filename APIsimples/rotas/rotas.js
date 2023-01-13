let appRouter = function(app){

    app.get('/', (req, res) =>{
        res.status(200).send('Bem vindo ao nosso web service - Rota GET')
    })

    app.post('/user', (req, res) => {
        res.status(200).send('Respondendo ap Método POST: Inserir um usuário')
    })

}

module.exports = appRouter
