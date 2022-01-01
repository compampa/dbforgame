'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Items extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsToMany(models.Character, {through: "Inventories", foreignKey: "item_id"})
            this.belongsToMany(models.Parameter, {through: "Grades"})
        }
    }

    Items.init({
        item_name: DataTypes.STRING,
        type: DataTypes.STRING,
        info: DataTypes.STRING,
        img: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Items',
    });
    return Items;
};