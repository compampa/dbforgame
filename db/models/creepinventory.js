'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CreepInventory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // this.hasOne(models.Creep, {foreignKey: 'creep_inventory_id'})
            // this.belongsTo(models.Creep, {foreignKey: "creep_id"})
            // this.belongsTo(models.Items, {foreignKey: "item_id"})
        }
    }

    CreepInventory.init({
        creep_id: DataTypes.INTEGER,
        item_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CreepInventory',
    });
    return CreepInventory;
};