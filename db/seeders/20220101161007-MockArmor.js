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
        await queryInterface.bulkInsert('Items', [
            {
                item_name: "Warrior's helmet",
                type: 'head',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Warrior's plate",
                type: 'body',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Warrior's boots",
                type: 'legs',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Assassin's mask",
                type: 'head',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Assassin's cuirass",
                type: 'body',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Assassin's boots",
                type: 'legs',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Monk's hood",
                type: 'head',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Monk's mantle",
                type: 'body',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                item_name: "Monk's boots",
                type: 'legs',
                info: 'description',
                img: 'link',
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
        await queryInterface.bulkDelete('Items', null, {});
    }
};
