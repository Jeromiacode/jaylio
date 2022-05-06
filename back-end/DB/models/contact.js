const { DataTypes, Sequelize } = require('sequelize');

/**
 * Représentation du modèle project
 * @param {Sequelize} sequelize
 * @returns
 */

module.exports = (sequelize) => {

    const Message = sequelize.define('message', {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
    },
    {
        timestamps: true,
        updatedAt: false
    });
    // to : index (models)
    return Message;
};