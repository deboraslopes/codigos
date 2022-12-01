const Sequelize = require ("sequelize")

const connection = new Sequelize('cliente', 'root','040919G&d',{
   host: 'localhost',
   dialect: 'mysql' 
})

module.exports = connection