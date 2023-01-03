const Sequelize = require ('sequelize')

const connection = new Sequelize ('proj_web', 'root', '040919G&d', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection