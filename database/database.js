const { Sequelize } = require("sequelize");

const connection = new Sequelize('jobwhats','postgres','uem123',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;