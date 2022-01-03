'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('CharacterStats', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            str: {
                type: Sequelize.INTEGER
            },
            agl: {
                type: Sequelize.INTEGER
            },
            int: {
                type: Sequelize.INTEGER
            },
            evs: {
                type: Sequelize.INTEGER
            },
            def: {
                type: Sequelize.INTEGER
            },
            dmg: {
                type: Sequelize.INTEGER
            },
            hp: {
                type: Sequelize.INTEGER
            },
            mp: {
                type: Sequelize.INTEGER
            },
            ap: {
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
        await queryInterface.dropTable('CharacterStats');
    }
};