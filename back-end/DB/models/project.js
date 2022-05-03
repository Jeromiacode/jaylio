const { DataTypes, Sequelize } = require('sequelize');

/**
 * Représentation du modèle project
 * @param {Sequelize} sequelize
 * @returns
 */

module.exports = (sequelize) => {

    const Project = sequelize.define('project', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        links: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });
    // to : index (models)
    return Project;
};
