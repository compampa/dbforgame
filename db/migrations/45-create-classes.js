'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Classes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            player_class_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "PlayerClasses",
                    key: "id"
                }
            },
            character_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Characters",
                    key: "id"
                }
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
        await queryInterface.dropTable('Classes');
    }
};