const Sequelize = require ('sequelize')
const conecta = require ('./database')

const paciente = conecta.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
    type: Sequelize.INTEGER,
    allowNull: false
    }
},
{
    timestamps:false,
}
)


/*paciente.sync({force: false}).then(()=>{
    console.log("Tabela criada com sucesso")
})*/


module.exports = paciente