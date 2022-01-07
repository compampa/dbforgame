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
                grade_id: 2,
                item_name: "Warrior's helmet",
                type: 'head',
                info: 'description',
                img: 'link',
                price: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Warrior's plate",
                type: 'body',
                info: 'description',
                img: 'link',
                price: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 3,
                item_name: "Warrior's boots",
                type: 'legs',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 8,
            },
            {
                grade_id: 4,
                item_name: "Assassin's mask",
                type: 'head',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 10,
            },
            {
                grade_id: 5,
                item_name: "Assassin's cuirass",
                type: 'body',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 12,
            },
            {
                grade_id: 6,
                item_name: "Assassin's boots",
                type: 'legs',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 9,
            },
            {
                grade_id: 7,
                item_name: "Monk's hood",
                type: 'head',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 10,
            },
            {
                grade_id: 8,
                item_name: "Monk's mantle",
                type: 'body',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 12,
            },
            {
                grade_id: 9,
                item_name: "Monk's boots",
                type: 'legs',
                info: 'description',
                img: 'link',
                createdAt: new Date(),
                updatedAt: new Date(),
                price: 12,
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
