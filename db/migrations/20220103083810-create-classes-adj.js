'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('ClassesAdjs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            // player_class_id: {
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: "PlayerClasses",
            //         key: "id"
            //     }
            // },
            lvl_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "LVLs",
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
        await queryInterface.dropTable('ClassesAdjs');
    }
};