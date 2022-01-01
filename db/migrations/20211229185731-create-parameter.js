'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Parameters', {
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
            def: {
                type: Sequelize.INTEGER
            },
            evs: {
                type: Sequelize.INTEGER
            },
            dmg: {
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
        await queryInterface.dropTable('Parameters');
    }
};