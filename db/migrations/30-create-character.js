'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Characters', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id"
                }
            },
            nickname: {
                type: Sequelize.STRING
            },
            // class_id: {
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: "PlayerClasses",
            //         key: "id"
            //     }
            // },
            // lvl: {
            //     type: Sequelize.INTEGER
            // },
            // equip_set: {
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: "EquipSets",
            //         key: "id"
            //     }
            // },
            balance: {
                type: Sequelize.INTEGER
            },
            exp: {
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
        await queryInterface.dropTable('Characters');
    }
};