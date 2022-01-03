'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LEVELS extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    LEVELS.init({
        value: DataTypes.INTEGER,
        exp: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'LEVELS',
    });
    return LEVELS;
};