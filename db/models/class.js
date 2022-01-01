'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Class extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Character, {foreignKey: "class_id"})
        }
    }

    Class.init({
        class_name: DataTypes.STRING,
        str: DataTypes.INTEGER,
        agl: DataTypes.INTEGER,
        int: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Class',
    });
    return Class;
};