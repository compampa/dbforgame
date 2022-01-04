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
        await queryInterface.bulkInsert('LEVELs', [
            {value: 1, exp: 0, createdAt: new Date(), updatedAt: new Date()},
            {value: 2, exp: 30, createdAt: new Date(), updatedAt: new Date()},
            {value: 3, exp: 70, createdAt: new Date(), updatedAt: new Date()},
            {value: 4, exp: 150, createdAt: new Date(), updatedAt: new Date()},
            {value: 5, exp: 250, createdAt: new Date(), updatedAt: new Date()},
            {value: 6, exp: 400, createdAt: new Date(), updatedAt: new Date()},
            {value: 7, exp: 600, createdAt: new Date(), updatedAt: new Date()},
            {value: 8, exp: 900, createdAt: new Date(), updatedAt: new Date()},
            {value: 9, exp: 1200, createdAt: new Date(), updatedAt: new Date()},
            {value: 10, exp: 1500, createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('LEVELs', null, {});
    }
};
