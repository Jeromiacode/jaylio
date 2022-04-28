const { DataTypes, Sequelize } = require('sequelize');

/**
 * Représentation du modèle weber
 * @param {Sequelize} sequelize
 * @returns
 */

module.exports = (sequelize) => {

    const Weber = sequelize.define('user', {
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                name: 'UK_Weber__Pseudo'
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: {
                name: 'UK_Weber__Email'
            }
        },
        password: {
            type: DataTypes.CHAR(60),
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        timestamps: true,
        updatedAt: false
    });

    return Weber;
};