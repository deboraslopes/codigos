const Sequelize = require ('sequelize')
const database = require ('./database')

const Artigo = database.define('artigos', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    conteudo:{
        type: Sequelize.STRING,
        allowNull: false,
    }
 
},
{
    timestamps:false,
}
)

//Artigo.sync({force:true})

module.exports = Artigo