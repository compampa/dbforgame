'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Grade extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Parameter, {foreignKey: "stat_id"})
        }
    }

    Grade.init({
        title: DataTypes.STRING,
        stat_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Grade',
    });
    return Grade;
};