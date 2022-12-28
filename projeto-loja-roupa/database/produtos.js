const Sequelize = require ('sequelize')
const connection = require ("./database")

const Produtos = connection.define('produtos', {
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    },
    qntd:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Produtos.sync({force:false})

module.exports = Produtos

