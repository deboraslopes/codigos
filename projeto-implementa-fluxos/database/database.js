const Sequelize = require ('sequelize')
const Paciente = require ('../database/pacientes')

const conecta = new Sequelize ('fluxos', 'root', '040919G&d', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conecta