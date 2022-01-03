'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PlayerClass extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsToMany(models.Character, {through: "Classes", foreignKey: "player_class_id"})
            this.belongsTo(models.CharacterStats, {foreignKey: "stats_id"})

        }
    }

    PlayerClass.init({
        class: DataTypes.STRING,
        stats_id: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'PlayerClass',
    });
    return PlayerClass;
};