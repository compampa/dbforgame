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
        await queryInterface.bulkInsert('Classes', [{
            class_name: 'warrior',
            str: 5,
            agl: 2,
            int: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            class_name: 'assassin',
            str: 3,
            agl: 5,
            int: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            class_name: 'monk',
            str: 3,
            agl: 3,
            int: 3,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Classes', null, {});
    }
};
