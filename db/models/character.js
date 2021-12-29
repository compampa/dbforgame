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
      // define association here
    }
  };
  Character.init({
    nickname: DataTypes.STRING,
    str: DataTypes.INTEGER,
    agl: DataTypes.INTEGER,
    int: DataTypes.INTEGER,
    equip_set: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};