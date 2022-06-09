const Sequelize = require('sequelize');
const sequelize = new Sequelize('mariadb://api-games:admin@127.0.0.1:3306/games');
module.exports = sequelize;


















// export const Game = sequelize.define('Game', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     year: {
//         type: DataTypes.DATEONLY,
//         allowNull: false,
//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false
//     }
    
// });


