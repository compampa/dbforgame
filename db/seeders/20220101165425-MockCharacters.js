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
        await queryInterface.bulkInsert('Characters', [
            {
                user_id: 1,
                nickname: 'John_Doe',
                // class_id: 1,
                // lvl: 10,
                balance: 100,
                exp: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 2,
                nickname: 'Darsen',
                // class_id: 1,
                // lvl: 10,
                balance: 100,
                exp: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 3,
                nickname: 'Aleksey',
                // class_id: 1,
                // lvl: 10,
                balance: 100,
                exp: 5,
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
        await queryInterface.bulkDelete('Characters', null, {});
    }
};
