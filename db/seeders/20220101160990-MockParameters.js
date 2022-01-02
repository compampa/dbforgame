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
        await queryInterface.bulkInsert('Parameters', [
            {str: 5, agl: 2, int: 1, def: 20, evs: 2, createdAt: new Date(), updatedAt: new Date()}, // warrior body common
            {str: 4, agl: 1, int: 1, def: 12, evs: 1, createdAt: new Date(), updatedAt: new Date()}, // warrior helmet common
            {str: 3, agl: 1, int: 1, def: 8, evs: 1, createdAt: new Date(), updatedAt: new Date()}, // warrior boots common
            {str: 2, agl: 5, int: 2, def: 10, evs: 5, createdAt: new Date(), updatedAt: new Date()}, // assassin helmet common
            {str: 3, agl: 8, int: 2, def: 15, evs: 5, createdAt: new Date(), updatedAt: new Date()}, // assassin body common
            {str: 1, agl: 4, int: 1, def: 8, evs: 3, createdAt: new Date(), updatedAt: new Date()}, // assassin boots common
            {str: 3, agl: 3, int: 3, def: 12, evs: 2, createdAt: new Date(), updatedAt: new Date()}, // monk head common
            {str: 3, agl: 3, int: 4, def: 15, evs: 4, createdAt: new Date(), updatedAt: new Date()}, // monk body common
            {str: 1, agl: 2, int: 3, def: 10, evs: 3, createdAt: new Date(), updatedAt: new Date()}, // monk boots common
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Parameters', null, {});
    }
};
