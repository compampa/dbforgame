'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CharacterStats extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // this.hasOne(models.PlayerClass, {foreignKey: "stats_id"})
            this.hasOne(models.CurrentCondition, {foreignKey: "stats_id"})
        }
    }

    CharacterStats.init({
        str: DataTypes.INTEGER,
        agl: DataTypes.INTEGER,
        int: DataTypes.INTEGER,
        evs: DataTypes.INTEGER,
        def: DataTypes.INTEGER,
        dmg: DataTypes.INTEGER,
        hp: DataTypes.INTEGER,
        mp: DataTypes.INTEGER,
        ap: DataTypes.INTEGER,
        desc: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'CharacterStats',
    });
    return CharacterStats;
};