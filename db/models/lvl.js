'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LVL extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.PlayerStats, {foreignKey: "player_stats_id"})
            this.belongsToMany(models.Character, {through: "ClassesAdjs", foreignKey: "lvl_id"})
        }
    }

    LVL.init({
        est_exp: DataTypes.INTEGER,
        player_stats_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'LVL',
    });
    return LVL;
};