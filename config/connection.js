const { Sequelize } = require('sequelize');
const Game = require('../models/Game')


const connection = new Sequelize("mariadb://root:root@localhost:3306/games");
connection.define("Games", Game);
connection
    .authenticate()
    .then(async () => {
        await connection.sync({ force: false });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });

module.exports = connection;
