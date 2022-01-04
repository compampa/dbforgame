'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   player_class_id: 1
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Classes', [
            {player_class_id: 1, character_id: 1, createdAt: new Date(), updatedAt: new Date()},
            {player_class_id: 2, character_id: 2, createdAt: new Date(), updatedAt: new Date()},
            {player_class_id: 3, character_id: 3, createdAt: new Date(), updatedAt: new Date()},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('Classes', null, {});
         */
        await queryInterface.bulkDelete('Classes', null, {});
    }
};
