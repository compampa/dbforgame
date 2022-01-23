'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hitens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsToMany(models.BattleRoom, {through: "BattleLogs", foreignKey:"hit_id"})
      // define association here
    }
  };
  hitens.init({
    body_part: DataTypes.STRING,
    type_of_action: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hitens',
  });
  return hitens;
};