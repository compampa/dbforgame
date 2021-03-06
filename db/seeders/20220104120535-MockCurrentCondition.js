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
        await queryInterface.bulkInsert('CurrentConditions', [
            {stats_id: 1, class_id: 1, lvl_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 2, class_id: 1, lvl_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 3, class_id: 1, lvl_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 4, class_id: 1, lvl_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 5, class_id: 1, lvl_id: 5, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 6, class_id: 1, lvl_id: 6, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 7, class_id: 1, lvl_id: 7, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 8, class_id: 1, lvl_id: 8, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 9, class_id: 1, lvl_id: 9, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 10, class_id: 1, lvl_id: 10, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 11, class_id: 2, lvl_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 12, class_id: 2, lvl_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 13, class_id: 2, lvl_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 14, class_id: 2, lvl_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 15, class_id: 2, lvl_id: 5, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 16, class_id: 2, lvl_id: 6, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 17, class_id: 2, lvl_id: 7, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 18, class_id: 2, lvl_id: 8, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 19, class_id: 2, lvl_id: 9, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 20, class_id: 2, lvl_id: 10, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 21, class_id: 3, lvl_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 22, class_id: 3, lvl_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 23, class_id: 3, lvl_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 24, class_id: 3, lvl_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 25, class_id: 3, lvl_id: 5, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 26, class_id: 3, lvl_id: 6, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 27, class_id: 3, lvl_id: 7, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 28, class_id: 3, lvl_id: 8, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 29, class_id: 3, lvl_id: 9, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 30, class_id: 3, lvl_id: 10, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 31, class_id: 4, lvl_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 32, class_id: 4, lvl_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 33, class_id: 4, lvl_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 34, class_id: 4, lvl_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 35, class_id: 4, lvl_id: 5, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 36, class_id: 4, lvl_id: 6, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 37, class_id: 4, lvl_id: 7, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 38, class_id: 4, lvl_id: 8, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 39, class_id: 4, lvl_id: 9, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 40, class_id: 4, lvl_id: 10, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 41, class_id: 5, lvl_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 42, class_id: 5, lvl_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 43, class_id: 5, lvl_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 44, class_id: 5, lvl_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 45, class_id: 5, lvl_id: 5, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 46, class_id: 5, lvl_id: 6, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 47, class_id: 5, lvl_id: 7, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 48, class_id: 5, lvl_id: 8, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 49, class_id: 5, lvl_id: 9, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 50, class_id: 5, lvl_id: 10, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 51, class_id: 6, lvl_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 52, class_id: 6, lvl_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 53, class_id: 6, lvl_id: 3, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 54, class_id: 6, lvl_id: 4, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 55, class_id: 6, lvl_id: 5, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 56, class_id: 6, lvl_id: 6, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 57, class_id: 6, lvl_id: 7, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 58, class_id: 6, lvl_id: 8, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 59, class_id: 6, lvl_id: 9, createdAt: new Date(), updatedAt: new Date()},
            {stats_id: 60, class_id: 6, lvl_id: 10, createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('CurrentConditions', null, {});
         */
        await queryInterface.bulkDelete('CurrentConditions', null, {});
    }
};
