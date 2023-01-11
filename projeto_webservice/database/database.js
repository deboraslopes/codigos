const Sequelize = require ("sequelize")

const connection = new Sequelize('aluno', 'root',' ',{
   host: 'localhost',
   dialect: 'mysql' 
})

module.exports = connection