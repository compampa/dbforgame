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
        await queryInterface.bulkInsert('Parameters', [
            {str: 5, agl: 2, int: 1, def: 20, evs: 2, createdAt: new Date(), updatedAt: new Date()}, // warrior body common
            {str: 4, agl: 1, int: 1, def: 12, evs: 1, createdAt: new Date(), updatedAt: new Date()}, // warrior helmet common
            {str: 3, agl: 1, int: 1, def: 8, evs: 1, createdAt: new Date(), updatedAt: new Date()}, // warrior boots common
            {str: 2, agl: 5, int: 2, def: 10, evs: 5, createdAt: new Date(), updatedAt: new Date()}, // assassin helmet common
            {str: 3, agl: 8, int: 2, def: 15, evs: 5, createdAt: new Date(), updatedAt: new Date()}, // assassin body common
            {str: 1, agl: 4, int: 1, def: 8, evs: 3, createdAt: new Date(), updatedAt: new Date()}, // assassin boots common
            {str: 3, agl: 3, int: 3, def: 12, evs: 2, createdAt: new Date(), updatedAt: new Date()}, // monk head common
            {str: 3, agl: 3, int: 4, def: 15, evs: 4, createdAt: new Date(), updatedAt: new Date()}, // monk body common
            {str: 1, agl: 2, int: 3, def: 10, evs: 3, createdAt: new Date(), updatedAt: new Date()}, // monk boots common
            /*id 10*/{str: 5, agl: 2, int: 1, dmg: 10, createdAt: new Date(), updatedAt: new Date()}, // warrior axe
            {str: 2, agl: 5, int: 1, dmg: 7, createdAt: new Date(), updatedAt: new Date()}, // assassin knife
            {str: 3, agl: 3, int: 2, dmg: 12, createdAt: new Date(), updatedAt: new Date()}, // monk staff

           /*id 37*/
            {str:6, agl:2, int:2, def:30, evs:2,createdAt: new Date(), updatedAt: new Date()},// warrior helmet uncommon
            {str:5, agl:1, int:1, def:22, evs:1,createdAt: new Date(), updatedAt: new Date()},// warrior plate uncommon
            {str:4, agl:1, int:1, def:14, evs:1,createdAt: new Date(), updatedAt: new Date()},// Warrior's boots uncommon
            {str:3, agl:5, int:1, def:15, evs:5,createdAt: new Date(), updatedAt: new Date()},// "Assassin's mask uncommon
            {str:4, agl:8, int:2, def:20, evs:5,createdAt: new Date(), updatedAt: new Date()},//"Assassin's cuirass" uncommon
            {str:2, agl:4, int:2, def:12, evs:3,createdAt: new Date(), updatedAt: new Date()},// "Assassin's boots",uncommon
            {str:4, agl:3, int:1, def:18, evs:2,createdAt: new Date(), updatedAt: new Date()},//"Monk's hood" uncommon
            {str:4, agl:3, int:3, def:20, evs:4,createdAt: new Date(), updatedAt: new Date()},//"Monk's mantle", uncommon
            {str:2, agl:2, int:4, def:15, evs:3,createdAt: new Date(), updatedAt: new Date()},// "Monk's boots"y uncommon
            {str:7, agl:3, int:3, def:35, evs:3,createdAt: new Date(), updatedAt: new Date()},// warrior helmet rare
            {str:6, agl:2, int:2, def:27, evs:2,createdAt: new Date(), updatedAt: new Date()},// warrior plate rare
            {str:5, agl:2, int:2, def:21, evs:2,createdAt: new Date(), updatedAt: new Date()},// Warrior's boots rare
            {str:4, agl:6, int:2, def:25, evs:6,createdAt: new Date(), updatedAt: new Date()},// "Assassin's mask rare
            {str:5, agl:9, int:3, def:30, evs:6,createdAt: new Date(), updatedAt: new Date()},// "Assassin's cuirass" rare
            {str:3, agl:5, int:3, def:16, evs:4,createdAt: new Date(), updatedAt: new Date()},// "Assassin's boots",rare
            {str:5, agl:4, int:2, def:28, evs:3,createdAt: new Date(), updatedAt: new Date()},// Monk's hood" rare
            {str:5, agl:4, int:4, def:32, evs:5,createdAt: new Date(), updatedAt: new Date()},// "Monk's mantle", rare
            {str:3, agl:3, int:5, def:24, evs:4,createdAt: new Date(), updatedAt: new Date()},// "Monk's boots"y rare


            
            // {str:, agl:, int:, def:, evs:,createdAt: new Date(), updatedAt: new Date()},// warrior body rare

        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Parameters', null, {});
    }
};
