'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class AccessorySet extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.EquipSet, {foreignKey: "accessory_set_id"})
        }
    }
    AccessorySet.init({
        ring_id: DataTypes.INTEGER,
        necklace_id: DataTypes.INTEGER,
        sphere_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'AccessorySet',
    });
    return AccessorySet;
};