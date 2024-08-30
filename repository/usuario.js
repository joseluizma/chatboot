const { Sequelize } = require("sequelize");
const Usuario = require("../usuario/usuario");

async function getNewUsers() {
    return new Promise((resolve, reject) => {
        Usuario.findAll({
            where:{
                confirmado: 0
            }
        }).then((usuarios) =>{
           resolve(usuarios); 
        })    
    })
}

module.exports = {getNewUsers};