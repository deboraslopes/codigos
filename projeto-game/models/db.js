const Sequelize = require('sequelize')
const sequelize = new Sequelize("jogos", "root", "040919G&d", {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
.then(function(){
    console.log("Conexão com Banco de Dados realizada com sucesso!")
}).catch(function(){
    console.log("Erro de conexão com o Banco de Dados")
})

module.exports = sequelize