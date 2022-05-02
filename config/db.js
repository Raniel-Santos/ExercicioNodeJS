//Inicializando do Banco de Dados

const Sequelize = require('sequelize')
const sequelize = new Sequelize('exdsII', 'postgres', '112290',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})

//Criando o modelo

const Usuario = sequelize.define('usuarios',{

    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true       
    },

    usuario_nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    pais: {
        type:Sequelize.STRING
    },
    mensagem: {
        type:Sequelize.STRING
    }
},{
    timestamps:false
})

Usuario.sync({force:true})

module.exports = Usuario