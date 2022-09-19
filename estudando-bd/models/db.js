const Sequelize = require('sequelize')

const sequelize = new Sequelize("debora", "root", "040919G&d", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com banco de dados realizada com sucesso!")
}).catch(function(){
    console.log("Erro: Conexão com banco de dados não realizada!")
})

module.exports = sequelize