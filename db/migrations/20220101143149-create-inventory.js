'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Inventories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            character_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Characters",
                    key: "id"
                }
            },
            cell_1: {
                type: Sequelize.INTEGER
            },
            cell_2: {
                type: Sequelize.INTEGER
            },
            cell_3: {
                type: Sequelize.INTEGER
            },
            cell_4: {
                type: Sequelize.INTEGER
            },
            cell_5: {
                type: Sequelize.INTEGER
            },
            cell_6: {
                type: Sequelize.INTEGER
            },
            cell_7: {
                type: Sequelize.INTEGER
            },
            cell_8: {
                type: Sequelize.INTEGER
            },
            cell_9: {
                type: Sequelize.INTEGER
            },
            cell_10: {
                type: Sequelize.INTEGER
            },
            cell_11: {
                type: Sequelize.INTEGER
            },
            cell_12: {
                type: Sequelize.INTEGER
            },
            cell_13: {
                type: Sequelize.INTEGER
            },
            cell_14: {
                type: Sequelize.INTEGER
            },
            cell_15: {
                type: Sequelize.INTEGER
            },
            cell_16: {
                type: Sequelize.INTEGER
            },
            cell_17: {
                type: Sequelize.INTEGER
            },
            cell_18: {
                type: Sequelize.INTEGER
            },
            cell_19: {
                type: Sequelize.INTEGER
            },
            cell_20: {
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
        await queryInterface.dropTable('Inventories');
    }
};