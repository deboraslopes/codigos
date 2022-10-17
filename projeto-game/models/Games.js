const Sequelize = require ('sequelize')
const db = require('./db')

const Games = db.define('games', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
})

//Games.sync()
module.exports = Games