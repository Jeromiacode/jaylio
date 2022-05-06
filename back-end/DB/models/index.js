const { Sequelize } = require('sequelize');

// Initialisation de Sequelize
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,
    {
        host: process.env.DB_SERVER,
        port: process.env.DB_PORT,
        dialect: 'mssql',
        pool: {
            min: 0,
            max: 5,
            idle: 10_000,
            acquire: 30_000
        }
    }
);

// Creation de notre DB
const db = {};
db.sequelize = sequelize;

// Modèles DB
db.User = require('./user')(sequelize);
db.Message = require('./contact')(sequelize);
db.Project = require('./project')(sequelize);
db.Category = require('./category')(sequelize);

// Relation DB
db.Category.hasMany(db.Project)
db.Project.belongsTo(db.Category);

// to : App.js
module.exports = db;
