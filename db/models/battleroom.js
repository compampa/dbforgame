'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class BattleRoom extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Character, {foreignKey: "initial_character_id"})
            this.belongsToMany(models.hitens, {through: "BattleLogs", foreignKey:"battle_room_id"})
        }
    }
    BattleRoom.init({
        initial_character_id: DataTypes.INTEGER,
        opponent_id: DataTypes.INTEGER,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'BattleRoom',
    });
    return BattleRoom;
};