const Sequelize = require("sequelize")
                                //nome bd
const connection = new Sequelize('cliente','root','root',{
    host:'localhost',
    dialect: 'mysql'
})

module.exports = connection