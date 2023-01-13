const faker = require ('faker')

let appRouter = function(app){

    app.get('/', (req, res) =>{
        res.status(200).send('Bem vindo ao nosso web service')
    })

    app.post('/', (req, res) => {
        res.status(200).send('Respondendo ap Método POST: Bem vindo ao nosso web service!')
    })

    app.get('/usuario',(req, res) =>{
        let dados_usuario = ({
            primeiroNome: faker.name.firstName(),
            ultimoNome: faker.name.lastName(),
            username: faker.internet.username(),
            email: faker.internet.email()
        })
        res.status(200).send(dados_usuario)
    }

    app.get('/usuarios/:num',(req, res) =>{
        let usuarios = []
        let num = req.params.num

        if(isFinite(num) && num > 0 {
            usuarios.push({
                primeiroNome: faker.name.firstName(),
                ultimoNome: faker.name.lastName(),
                username: faker.internet.username(),
                email: faker.internet.email()
            })
        })
        res.status(200).send(usuarios)
    })else{
        res.status(400).send({message: 'Número de usuarios invalido'})
    }
})

module.exports = appRouter