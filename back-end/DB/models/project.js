const { DataTypes, Sequelize } = require('sequelize');

/**
 * Représentation du modèle project
 * @param {Sequelize} sequelize
 * @returns
 */

module.exports = (sequelize) => {

    const Project = sequelize.define('project', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fileName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    // to : index (models)
    return Project;
};
