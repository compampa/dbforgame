'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Character extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {foreignKey: "user_id"})
            this.hasMany(models.BattleRoom, {foreignKey: "initial_character_id"})
            this.belongsToMany(models.Items, {through: "Inventories", foreignKey: "character_id"})
            this.belongsToMany(models.Items, {through: "Equipment", foreignKey: "character_id"})
            // this.belongsToMany(models.Items, {through: "Auctions", foreignKey: "character_id"})
            this.belongsToMany(models.PlayerClass, {through: "Classes", foreignKey: "character_id"})
        }
    }

    Character.init({
        user_id: DataTypes.INTEGER,
        nickname: DataTypes.STRING,
        // class_id: DataTypes.INTEGER,
        // lvl: DataTypes.INTEGER,
        // equip_set: DataTypes.INTEGER,
        balance: DataTypes.INTEGER,
        exp: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Character',
    });
    return Character;
};