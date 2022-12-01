const Sequelize = require("sequelize")
const connection = require("./database")
                            //nome da tabela
const cliente = connection.define('cliente',{
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

cliente.sync({force: false}).then(()=>{
    console.log("Tabela criada com sucesso")
})

module.exports = Clie