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
                grade_id: 1,
                item_name: "Warrior ring",
                type: "ring",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Assassin ring",
                type: "ring",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Monk ring",
                type: "ring",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Warrior sphere",
                type: "sphere",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Assassin sphere",
                type: "sphere",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Monk sphere",
                type: "sphere",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Warrior necklace",
                type: "necklace",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Assassin necklace",
                type: "necklace",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Monk necklace",
                type: "necklace",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            }
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
