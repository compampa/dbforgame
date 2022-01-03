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
        await queryInterface.bulkInsert('CharacterStats', [
            { // id:1  warrior 1 lvl
                str: 7,
                agl: 3,
                int: 2,
                evs: 1,
                def: 5,
                dmg: 5,
                hp: 35,
                mp: 25,
                ap: 30,
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
        await queryInterface.bulkDelete('CharacterStats', null, {});
    }
};
