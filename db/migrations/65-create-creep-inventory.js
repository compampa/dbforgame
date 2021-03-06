'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('CreepInventories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            creep_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Creeps",
                    key: "id"
                }
            },
            item_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Items",
                    key: "id"
                }
            },
            cash: {
                type: Sequelize.INTEGER,
            },
            exp: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('CreepInventories');
    }
};