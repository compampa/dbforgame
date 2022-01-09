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
                img: '/image-link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'assassin',
                description: 'freaky assassin',
                img: '/image-link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'monk',
                description: 'patient adjascent monk',
                img: '/image-link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'zombie',
                description: 'horrible brainless zombie',
                img: '/image-link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'animal',
                description: 'wild and dangerous animal',
                img: '/image-link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                class: 'pagan',
                description: 'crazy pagan from near village',
                img: '/image-link',
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
