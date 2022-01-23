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
        // await queryInterface.bulkInsert('Inventories', [
            // {character_id: 1, item_id: 1, createdAt: new Date(), updatedAt: new Date()},
            // {character_id: 1, item_id: 2, createdAt: new Date(), updatedAt: new Date()},
            // {character_id: 1, item_id: 2, createdAt: new Date(), updatedAt: new Date()},
            // {character_id: 1, item_id: 3, createdAt: new Date(), updatedAt: new Date()},
            // {character_id: 1, item_id: 4, createdAt: new Date(), updatedAt: new Date()},
        // ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Inventories', null, {});
    }
};
