'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UserToken extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasOne(models.UserToken, {foreignKey: "user_id"})
        }
    }
    UserToken.init({
        user_id: DataTypes.INTEGER,
        token: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'UserToken',
    });
    return UserToken;
};