'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('PlayerClasses', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('PlayerClasses', [
            {
                class: 'warrior',
                description: 'mighty warrior',
                // stats_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'assassin',
                description: 'freaky assassin',
                // stats_id: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'monk',
                description: 'patient adjascent monk',
                // stats_id: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('PlayerClasses', null, {});
         */
        await queryInterface.bulkDelete('PlayerClasses', null, {});
    }
};
