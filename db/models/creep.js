'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Creep extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.PlayerClass, {foreignKey: "class_id"})
            // this.belongsTo(models.CreepInventory, {foreignKey: 'creep_inventory_id'})
            this.belongsToMany(models.Items, {through: "CreepInventories", foreignKey: "creep_id"})
        }
    }

    Creep.init({
        class_id: DataTypes.INTEGER,
        creep_inventory_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Creep',
    });
    return Creep;
};