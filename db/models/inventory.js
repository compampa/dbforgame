'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Inventory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Character, {foreignKey: "character_id"})
        }
    }

    Inventory.init({
        character_id: DataTypes.INTEGER,
        cell_1: DataTypes.INTEGER,
        cell_2: DataTypes.INTEGER,
        cell_3: DataTypes.INTEGER,
        cell_4: DataTypes.INTEGER,
        cell_5: DataTypes.INTEGER,
        cell_6: DataTypes.INTEGER,
        cell_7: DataTypes.INTEGER,
        cell_8: DataTypes.INTEGER,
        cell_9: DataTypes.INTEGER,
        cell_10: DataTypes.INTEGER,
        cell_11: DataTypes.INTEGER,
        cell_12: DataTypes.INTEGER,
        cell_13: DataTypes.INTEGER,
        cell_14: DataTypes.INTEGER,
        cell_15: DataTypes.INTEGER,
        cell_16: DataTypes.INTEGER,
        cell_17: DataTypes.INTEGER,
        cell_18: DataTypes.INTEGER,
        cell_19: DataTypes.INTEGER,
        cell_20: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Inventory',
    });
    return Inventory;
};