'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PlayerStats extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.PlayerClass, {foreignKey: "player_stats_id"})
            this.belongsTo(models.LVL, {foreignKey: "player_stats_id"})
            this.belongsToMany(models.Character, {through: "ClassesAdjs", foreignKey: "character_id"})
        }
    }

    PlayerStats.init({
        str: DataTypes.INTEGER,
        agl: DataTypes.INTEGER,
        int: DataTypes.INTEGER,
        evs: DataTypes.INTEGER,
        def: DataTypes.INTEGER,
        dmg: DataTypes.INTEGER,
        hp: DataTypes.INTEGER,
        mp: DataTypes.INTEGER,
        ap: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PlayerStats',
    });
    return PlayerStats;
};