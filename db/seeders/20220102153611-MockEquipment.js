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
        await queryInterface.bulkInsert('Equipment', [
            // player 1
            {item_id: 10, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 13, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 16, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 1, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 2, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 3, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 19, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            // player 2
            {item_id: 11, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 14, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 17, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 4, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 5, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 6, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {item_id: 20, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Equipment', null, {});
    }
};
