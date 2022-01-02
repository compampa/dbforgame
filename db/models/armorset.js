'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ArmorSet extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.EquipSet, {foreignKey: "armor_set_id"})
        }
    }

    ArmorSet.init({
        head_id: DataTypes.INTEGER,
        body_id: DataTypes.INTEGER,
        legs_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ArmorSet',
    });
    return ArmorSet;
};