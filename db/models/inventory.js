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
            this.belongsToMany(models.Items, {through:"Auctions", foreignKey: "inventory_id"})
        }
    }

    Inventory.init({
        character_id: DataTypes.INTEGER,
        item_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Inventory',
    });
    return Inventory;
};