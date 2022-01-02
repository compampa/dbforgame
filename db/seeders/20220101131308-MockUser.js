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
        await queryInterface.bulkInsert('Users', [{
            login: 'first',
            password: 42,
            email: 'test_user_one@user_one.kr',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            login: 'second',
            password: 42,
            email: 'test_user_two@user_two.kr',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            login: 'third',
            password: 42,
            email: 'test_user_three@user_three.kr',
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
        await queryInterface.bulkDelete('Users', null, {});
    }
};
