const {Sequelize} = require('sequelize');

/**
 * Représentation du modèle Many To Many entre Project et Category
 * @param {Sequelize} sequelize
 * @returns
 */

module.exports = (sequelize) => {

    const CategoryProject = sequelize.define('categoryProject', {}, {
        timestamps: false,
    });
    // to : index (models)
    return CategoryProject;
};
