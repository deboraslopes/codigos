const Sequelize = require ('sequelize')
const connection = require ("./database")

const Produtos = connection.define('produtos', {
    produtos:{
        type:Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.NUMBER,
        allowNull: false
    },
    qntd:{
        type: Sequelize.NUMBER,
        allowNull: false
    }
})

Produtos.sync({force:false})
module.exports = Produtos

