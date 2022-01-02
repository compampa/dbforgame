'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('EquipSets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            armor_set_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "ArmorSets",
                    key: "id"
                }
            },
            accessory_set_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "AccessorySets",
                    key: "id"
                }
            },
            weapon_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Items",
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
        await queryInterface.dropTable('EquipSets');
    }
};