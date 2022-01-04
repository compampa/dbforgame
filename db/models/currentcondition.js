'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CurrentCondition extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.CharacterStats, {foreignKey: "stats_id"})
            this.belongsTo(models.PlayerClass, {foreignKey: "class_id"})
            this.belongsTo(models.LEVELS, {foreignKey: "lvl_id"})
        }
    }

    CurrentCondition.init({
        stats_id: DataTypes.INTEGER,
        class_id: DataTypes.INTEGER,
        lvl_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'CurrentCondition',
    });
    return CurrentCondition;
};