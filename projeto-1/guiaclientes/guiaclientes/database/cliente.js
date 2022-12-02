const Sequelize = require("sequelize")
const connection = require("./database")
                                //nome tabela
const Cliente = connection.define('cliente',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Cliente.sync({force:false})


module.exports = Cliente