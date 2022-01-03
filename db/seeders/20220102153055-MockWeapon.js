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
                grade_id: 10,
                item_name: "Warrior Axe",
                type: "weapon",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Assassin Knife",
                type: "weapon",
                info: "description",
                img: "link",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                grade_id: 1,
                item_name: "Monks Staff",
                type: "weapon",
                info: "description",
                img: "link",
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
