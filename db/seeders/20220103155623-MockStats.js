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
            // WARRIOR
            {str: 7, agl: 3, int: 2, evs: 2, def: 5, dmg: 5, hp: 35, mp: 25, ap: 30, desc: 'warrior 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 9, agl: 4, int: 3, evs: 3, def: 5, dmg: 7, hp: 50, mp: 25, ap: 50, desc: 'warrior 2', createdAt: new Date(), updatedAt: new Date()},
            {str: 12, agl: 5, int: 3, evs: 4, def: 10, dmg: 9, hp: 65, mp: 25, ap: 70, desc: 'warrior 3', createdAt: new Date(), updatedAt: new Date()},
            {str: 15, agl: 6, int: 3, evs: 5, def: 15, dmg: 11, hp: 80, mp: 25, ap: 90, desc: 'warrior 4', createdAt: new Date(), updatedAt: new Date()},
            {str: 20, agl: 6, int: 4, evs: 6, def: 20, dmg: 13, hp: 100, mp: 25, ap: 110, desc: 'warrior 5', createdAt: new Date(), updatedAt: new Date()},
            {str: 26, agl: 7, int: 4, evs: 7, def: 25, dmg: 15, hp: 120, mp: 30, ap: 130, desc: 'warrior 6', createdAt: new Date(), updatedAt: new Date()},
            {str: 33, agl: 7, int: 4, evs: 8, def: 30, dmg: 17, hp: 140, mp: 30, ap: 150, desc: 'warrior 7', createdAt: new Date(), updatedAt: new Date()},
            {str: 39, agl: 8, int: 5, evs: 10, def: 35, dmg: 19, hp: 160, mp: 30, ap: 180, desc: 'warrior 8', createdAt: new Date(), updatedAt: new Date()},
            {str: 45, agl: 10, int: 6, evs: 12, def: 40, dmg: 21, hp: 180, mp: 30, ap: 200, desc: 'warrior 9', createdAt: new Date(), updatedAt: new Date()},
            {str: 55, agl: 12, int: 7, evs: 14, def: 45, dmg: 23, hp: 200, mp: 40, ap: 220, desc: 'warrior 10', createdAt: new Date(), updatedAt: new Date()},
            // ASSASSIN
            {str: 2, agl: 8, int: 2, evs: 2, def: 2, dmg: 3, hp: 25, mp: 20, ap: 40, desc: 'assassin 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 4, agl: 12, int: 2, evs: 7, def: 3, dmg: 6, hp: 35, mp: 20, ap: 70, desc: 'assassin 2', createdAt: new Date(), updatedAt: new Date()},
            {str: 5, agl: 16, int: 2, evs: 14, def: 6, dmg: 8, hp: 45, mp: 20, ap: 100, desc: 'assassin 3', createdAt: new Date(), updatedAt: new Date()},
            {str: 6, agl: 21, int: 3, evs: 21, def: 9, dmg: 9, hp: 55, mp: 25, ap: 140, desc: 'assassin 4', createdAt: new Date(), updatedAt: new Date()},
            {str: 7, agl: 26, int: 4, evs: 28, def: 12, dmg: 10, hp: 70, mp: 25, ap: 180, desc: 'assassin 5', createdAt: new Date(), updatedAt: new Date()},
            {str: 9, agl: 31, int: 4, evs: 35, def: 15, dmg: 12, hp: 82, mp: 25, ap: 220, desc: 'assassin 6', createdAt: new Date(), updatedAt: new Date()},
            {str: 11, agl: 36, int: 4, evs: 42, def: 18, dmg: 14, hp: 94, mp: 25, ap: 250, desc: 'assassin 7', createdAt: new Date(), updatedAt: new Date()},
            {str: 13, agl: 41, int: 4, evs: 49, def: 21, dmg: 15, hp: 106, mp: 30, ap: 275, desc: 'assassin 8', createdAt: new Date(), updatedAt: new Date()},
            {str: 15, agl: 46, int: 5, evs: 56, def: 22, dmg: 16, hp: 118, mp: 30, ap: 310, desc: 'assassin 9', createdAt: new Date(), updatedAt: new Date()},
            {str: 18, agl: 60, int: 5, evs: 70, def: 23, dmg: 18, hp: 130, mp: 30, ap: 350, desc: 'assassin 10', createdAt: new Date(), updatedAt: new Date()},
            // MONK
            {str: 3, agl: 3, int: 4, evs: 2, def: 3, dmg: 3, hp: 30, mp: 40, ap: 35, desc: 'monk 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 6, agl: 6, int: 6, evs: 4, def: 4, dmg: 5, hp: 42, mp: 45, ap: 55, desc: 'monk 2', createdAt: new Date(), updatedAt: new Date()},
            {str: 9, agl: 9, int: 9, evs: 10, def: 8, dmg: 7, hp: 50, mp: 50, ap: 80, desc: 'monk 3', createdAt: new Date(), updatedAt: new Date()},
            {str: 12, agl: 12, int: 12, evs: 16, def: 12, dmg: 10, hp: 53, mp: 55, ap: 120, desc: 'monk 4', createdAt: new Date(), updatedAt: new Date()},
            {str: 15, agl: 15, int: 15, evs: 22, def: 16, dmg: 13, hp: 65, mp: 60, ap: 145, desc: 'monk 5', createdAt: new Date(), updatedAt: new Date()},
            {str: 18, agl: 18, int: 18, evs: 28, def: 19, dmg: 17, hp: 85, mp: 65, ap: 185, desc: 'monk 6', createdAt: new Date(), updatedAt: new Date()},
            {str: 21, agl: 21, int: 21, evs: 32, def: 22, dmg: 18, hp: 100, mp: 70, ap: 200, desc: 'monk 7', createdAt: new Date(), updatedAt: new Date()},
            {str: 24, agl: 24, int: 24, evs: 35, def: 24, dmg: 19, hp: 110, mp: 75, ap: 220, desc: 'monk 8', createdAt: new Date(), updatedAt: new Date()},
            {str: 27, agl: 27, int: 27, evs: 39, def: 26, dmg: 20, hp: 121, mp: 80, ap: 250, desc: 'monk 9', createdAt: new Date(), updatedAt: new Date()},
            {str: 30, agl: 30, int: 30, evs: 42, def: 30, dmg: 23, hp: 150, mp: 91, ap: 275, desc: 'monk 10', createdAt: new Date(), updatedAt: new Date()},
            // MOBS
            // ZOMBIE
            {str: 5, agl: 2, int: 1, evs: 1, def: 1, dmg: 3, hp: 25, mp: 5, ap: 25, desc: 'zombie 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 8, agl: 2, int: 1, evs: 1, def: 3, dmg: 5, hp: 40, mp: 7, ap: 45, desc: 'zombie 2', createdAt: new Date(), updatedAt: new Date()},
            {str: 9, agl: 4, int: 2, evs: 2, def: 6, dmg: 8, hp: 55, mp: 9, ap: 65, desc: 'zombie 3', createdAt: new Date(), updatedAt: new Date()},
            {str: 13, agl: 4, int: 2, evs: 3, def: 9, dmg: 10, hp: 70, mp: 11, ap: 85, desc: 'zombie 4', createdAt: new Date(), updatedAt: new Date()},
            {str: 16, agl: 6, int: 2, evs: 4, def: 12, dmg: 12, hp: 85, mp: 12, ap: 105, desc: 'zombie 5', createdAt: new Date(), updatedAt: new Date()},
            {str: 23, agl: 6, int: 2, evs: 5, def: 15, dmg: 14, hp: 100, mp: 13, ap: 125, desc: 'zombie 6', createdAt: new Date(), updatedAt: new Date()},
            {str: 30, agl: 7, int: 3, evs: 6, def: 18, dmg: 16, hp: 115, mp: 14, ap: 145, desc: 'zombie 7', createdAt: new Date(), updatedAt: new Date()},
            {str: 32, agl: 7, int: 3, evs: 7, def: 21, dmg: 18, hp: 130, mp: 15, ap: 160, desc: 'zombie 8', createdAt: new Date(), updatedAt: new Date()},
            {str: 38, agl: 7, int: 3, evs: 8, def: 24, dmg: 20, hp: 160, mp: 16, ap: 180, desc: 'zombie 9', createdAt: new Date(), updatedAt: new Date()},
            {str: 50, agl: 8, int: 3, evs: 10, def: 27, dmg: 22, hp: 180, mp: 17, ap: 200, desc: 'zombie 10', createdAt: new Date(), updatedAt: new Date()},
            // ANIMAL
            {str: 3, agl: 2, int: 2, evs: 6, def: 1, dmg: 3, hp: 25, mp: 15, ap: 30, desc: 'animal 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 5, agl: 5, int: 2, evs: 15, def: 3, dmg: 5, hp: 30, mp: 15, ap: 50, desc: 'animal 2', createdAt: new Date(), updatedAt: new Date()},
            {str: 7, agl: 12, int: 2, evs: 20, def: 6, dmg: 8, hp: 40, mp: 15, ap: 80, desc: 'animal 3', createdAt: new Date(), updatedAt: new Date()},
            {str: 9, agl: 18, int: 3, evs: 28, def: 9, dmg: 10, hp: 50, mp: 20, ap: 120, desc: 'animal 4', createdAt: new Date(), updatedAt: new Date()},
            {str: 11, agl: 22, int: 3, evs: 35, def: 12, dmg: 12, hp: 55, mp: 20, ap: 170, desc: 'animal 5', createdAt: new Date(), updatedAt: new Date()},
            {str: 13, agl: 28, int: 4, evs: 40, def: 15, dmg: 14, hp: 70, mp: 20, ap: 210, desc: 'animal 6', createdAt: new Date(), updatedAt: new Date()},
            {str: 15, agl: 33, int: 4, evs: 45, def: 18, dmg: 16, hp: 85, mp: 25, ap: 245, desc: 'animal 7', createdAt: new Date(), updatedAt: new Date()},
            {str: 17, agl: 39, int: 4, evs: 50, def: 21, dmg: 18, hp: 100, mp: 25, ap: 270, desc: 'animal 8', createdAt: new Date(), updatedAt: new Date()},
            {str: 19, agl: 45, int: 5, evs: 55, def: 24, dmg: 20, hp: 115, mp: 30, ap: 310, desc: 'animal 9', createdAt: new Date(), updatedAt: new Date()},
            {str: 21, agl: 50, int: 5, evs: 60, def: 27, dmg: 22, hp: 130, mp: 35, ap: 330, desc: 'animal 10', createdAt: new Date(), updatedAt: new Date()},
            // PAGANS
            {str: 2, agl: 1, int: 4, evs: 3, def: 3, dmg: 3, hp: 20, mp: 25, ap: 25, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 3, agl: 2, int: 6, evs: 6, def: 5, dmg: 5, hp: 20, mp: 30, ap: 45, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 4, agl: 4, int: 9, evs: 13, def: 8, dmg: 8, hp: 25, mp: 40, ap: 65, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 5, agl: 4, int: 12, evs: 15, def: 13, dmg: 10, hp: 30, mp: 50, ap: 80, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 6, agl: 5, int: 15, evs: 18, def: 15, dmg: 12, hp: 45, mp: 60, ap: 110, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 8, agl: 5, int: 18, evs: 20, def: 20, dmg: 14, hp: 60, mp: 65, ap: 150, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 10, agl: 6, int: 21, evs: 25, def: 25, dmg: 16, hp: 70, mp: 70, ap: 190, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 12, agl: 6, int: 24, evs: 27, def: 30, dmg: 18, hp: 90, mp: 75, ap: 200, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 14, agl: 8, int: 27, evs: 30, def: 35, dmg: 20, hp: 110, mp: 80, ap: 240, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
            {str: 16, agl: 9, int: 30, evs: 35, def: 40, dmg: 22, hp: 130, mp: 85, ap: 255, desc: 'pagan 1', createdAt: new Date(), updatedAt: new Date()},
        ], {});
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
