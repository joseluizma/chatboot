const { Sequelize } = require("sequelize");
const connection = require("../database/database");

const Usuario = connection.define('usuarios', {
    nome:{
        type: Sequelize.STRING,
        allowNull:false, 
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false, 
    },
    telefone:{
        type: Sequelize.STRING,
        allowNull:false, 
    },
    codigoAtivacao:{
        type: Sequelize.STRING,
        allowNull:false, 
    },
    confirmado:{
        type: Sequelize.INTEGER,
    }
});

Usuario.sync({force : false}).then(() => {});

module.exports = Usuario;