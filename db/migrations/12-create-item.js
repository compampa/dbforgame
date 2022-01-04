'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Items', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            grade_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Grades",
                    key: "id"
                }
            },
            item_name: {
                type: Sequelize.STRING
            },
            type: {
                type: Sequelize.STRING
            },
            info: {
                type: Sequelize.STRING
            },
            img: {
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Items');
    }
};