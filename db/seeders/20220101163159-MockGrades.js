'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Grades', [
            {
                title: 'common',
                item_id: 1,
                stat_id: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 2,
                stat_id: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 3,
                stat_id: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 4,
                stat_id: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 5,
                stat_id: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 6,
                stat_id: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 7,
                stat_id: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 8,
                stat_id: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'common',
                item_id: 9,
                stat_id: 9,
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
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Grades', null, {});
    }
};
