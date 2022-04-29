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

// Creation de notre DB (object)
const db = {};

// Add instance of Sequelize
db.sequelize = sequelize;

// Modèles DB
db.Category = require('./category')(sequelize);
db.Project = require('./project')(sequelize);
db.User = require('./user')(sequelize);
db.CategoryProject = require('./categoryProject')(sequelize);

// Relation DB
db.Project.belongsToMany(db.Category, { through: db.CategoryProject });
db.Category.belongsToMany(db.Project, { through: db.CategoryProject });

// to : App.js
module.exports = db;
