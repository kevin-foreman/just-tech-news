const Sequelize = require('sequelize');

require('dotenv').config();

<<<<<<< HEAD
// Create connection to our database, pass in your mysql information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);

} else {

    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {

    host: 'localhost',

    dialect: 'mysql',
    
    port: 3306
});
=======
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
>>>>>>> develop
}

module.exports = sequelize;