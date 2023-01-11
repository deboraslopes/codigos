const Sequelize = require ('sequelize')
const connection = require ("./database")

const connection = require("./database");

const Aluno = connection.define('aluno',{
    id:{
        type: Sequelize.INTEGER,
    },
    nome: {
        type: Sequelize.STRING,
    },
    matricula:{
        type: Sequelize.INTEGER,
},
})

module.exports = Aluno