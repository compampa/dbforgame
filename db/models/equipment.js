'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Equipment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        }
    }

    Equipment.init({
        item_id: DataTypes.INTEGER,
        character_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Equipment',
    });
    return Equipment;
};