const Sequelize = require ('sequelize')
const connection = new Sequelize ('atv_rotas', 'root', '040919G&d', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection