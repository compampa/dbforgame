'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Parameter extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            this.belongsToMany(models.Items, {through: "Grades"})
        }
    }

    Parameter.init({
        str: DataTypes.INTEGER,
        agl: DataTypes.INTEGER,
        int: DataTypes.INTEGER,
        def: DataTypes.INTEGER,
        evs: DataTypes.INTEGER,
        dmg: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Parameter',
    });
    return Parameter;
};