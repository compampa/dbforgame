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
        // await queryInterface.bulkInsert('Creeps', [
        //     {class_id: 1, createdAt: new Date(), updatedAt: new Date() },
        // ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('Creeps', null, {});
         */
        // await queryInterface.bulkDelete('Creeps', null, {});
    }
};
