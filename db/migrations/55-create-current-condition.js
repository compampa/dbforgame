'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('CurrentConditions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stats_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "CharacterStats",
                    key: "id",
                }
            },
            class_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "PlayerClasses",
                    key: "id"
                }
            },
            lvl_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "LEVELs",
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
        await queryInterface.dropTable('CurrentConditions');
    }
};