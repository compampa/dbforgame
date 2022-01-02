'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class EquipSet extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Character, {foreignKey: "equip_set"})
            this.hasOne(models.ArmorSet, {foreignKey: "armor_set_id"})
            this.hasOne(models.AccessorySet, {foreignKey: "accessory_set_id"})
            this.belongsTo(models.Items, {foreignKey: "weapon_id"})
        }
    }

    EquipSet.init({
        armor_set_id: DataTypes.INTEGER,
        accessory_set_id: DataTypes.INTEGER,
        weapon_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'EquipSet',
    });
    return EquipSet;
};