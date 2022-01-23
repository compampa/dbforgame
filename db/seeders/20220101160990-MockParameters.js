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
           /*id 9*/ {str: 1, agl: 2, int: 3, def: 10, evs: 3, createdAt: new Date(), updatedAt: new Date()}, // monk boots common
            


           
            {str:6, agl:2, int:2, def:30, evs:2,createdAt: new Date(), updatedAt: new Date()},// warrior helmet uncommon
            {str:5, agl:1, int:1, def:22, evs:1,createdAt: new Date(), updatedAt: new Date()},// warrior plate uncommon
            {str:4, agl:1, int:1, def:14, evs:1,createdAt: new Date(), updatedAt: new Date()},// Warrior's boots uncommon
            {str:3, agl:5, int:1, def:15, evs:5,createdAt: new Date(), updatedAt: new Date()},// "Assassin's mask uncommon
            {str:4, agl:8, int:2, def:20, evs:5,createdAt: new Date(), updatedAt: new Date()},//"Assassin's cuirass" uncommon
            {str:2, agl:4, int:2, def:12, evs:3,createdAt: new Date(), updatedAt: new Date()},// "Assassin's boots",uncommon
            {str:4, agl:3, int:1, def:18, evs:2,createdAt: new Date(), updatedAt: new Date()},//"Monk's hood" uncommon
            {str:4, agl:3, int:3, def:20, evs:4,createdAt: new Date(), updatedAt: new Date()},//"Monk's mantle", uncommon
           /*id18*/ {str:2, agl:2, int:4, def:15, evs:3,createdAt: new Date(), updatedAt: new Date()},// "Monk's boots"y uncommon

            {str:7, agl:3, int:3, def:35, evs:3,createdAt: new Date(), updatedAt: new Date()},// warrior helmet rare
            {str:6, agl:2, int:2, def:27, evs:2,createdAt: new Date(), updatedAt: new Date()},// warrior plate rare
            {str:5, agl:2, int:2, def:21, evs:2,createdAt: new Date(), updatedAt: new Date()},// Warrior's boots rare
            {str:4, agl:6, int:2, def:25, evs:6,createdAt: new Date(), updatedAt: new Date()},// "Assassin's mask rare
            {str:5, agl:9, int:3, def:30, evs:6,createdAt: new Date(), updatedAt: new Date()},// "Assassin's cuirass" rare
            {str:3, agl:5, int:3, def:16, evs:4,createdAt: new Date(), updatedAt: new Date()},// "Assassin's boots",rare
            {str:5, agl:4, int:2, def:28, evs:3,createdAt: new Date(), updatedAt: new Date()},// Monk's hood" rare
            {str:5, agl:4, int:4, def:32, evs:5,createdAt: new Date(), updatedAt: new Date()},// "Monk's mantle", rare
           /*id27*/ {str:3, agl:3, int:5, def:24, evs:4,createdAt: new Date(), updatedAt: new Date()},// "Monk's boots"y rare



            {str:5, agl:4, int:6, createdAt: new Date(), updatedAt: new Date()},// Warrior necklace common
            {str:5, agl:4, int:6,createdAt: new Date(), updatedAt: new Date()},// Assasin necklace common
            {str:5, agl:4, int:6,createdAt: new Date(), updatedAt: new Date()},// Monk necklace common
            
            {str:15, agl:13, int:17, createdAt: new Date(), updatedAt: new Date()},// Warrior necklace uncommon
            {str:15, agl:13, int:17, createdAt: new Date(), updatedAt: new Date()},// Assasin necklace uncommon
            {str:15, agl:13, int:17, createdAt: new Date(), updatedAt: new Date()},// Monk necklace uncommon
            

            {str:25, agl:20, int:28, createdAt: new Date(), updatedAt: new Date()},// Warrior necklace rare
            {str:25, agl:20, int:28, createdAt: new Date(), updatedAt: new Date()},// Assasin necklace rare
            /*36-id*/{str:25, agl:20, int:28, createdAt: new Date(), updatedAt: new Date()},// Monk necklace rare
            


            {str:3, agl:3, int:3, def:2, evs:2,createdAt: new Date(), updatedAt: new Date()},// Warrior sphere common
            {str:3, agl:3, int:3, def:4, evs:4,createdAt: new Date(), updatedAt: new Date()},// Assasin sphere common
            {str:3, agl:3, int:3, def:3, evs:2,createdAt: new Date(), updatedAt: new Date()},// Monk sphere common
            

            {str:9, agl:9, int:9, def:4, evs:4,createdAt: new Date(), updatedAt: new Date()},// Warrior sphere uncommon
            {str:9, agl:9, int:9, def:8, evs:8,createdAt: new Date(), updatedAt: new Date()},// Assasin sphere uncommon
            {str:9, agl:9, int:9, def:6, evs:4,createdAt: new Date(), updatedAt: new Date()},// Monk sphere uncommon
            

            {str:18, agl:18, int:18, def:8, evs:8,createdAt: new Date(), updatedAt: new Date()},// Warrior sphere rare
            {str:18, agl:18, int:18, def:16, evs:16,createdAt: new Date(), updatedAt: new Date()},// Assasin sphere rare
            /*45-id*/{str:18, agl:18, int:18, def:12, evs:8,createdAt: new Date(), updatedAt: new Date()},// Monk sphere rare
            


            { evs:3,createdAt: new Date(), updatedAt: new Date()},// Warrior ring common
            { evs:5,createdAt: new Date(), updatedAt: new Date()},// Assasin ring common
            { evs:3,createdAt: new Date(), updatedAt: new Date()},// Monk ring common
            

            { evs:6,createdAt: new Date(), updatedAt: new Date()},// Warrior ring uncommon
            { evs:10,createdAt: new Date(), updatedAt: new Date()},// Assasin ring uncommon
            { evs:6,createdAt: new Date(), updatedAt: new Date()},// Monk ring uncommon
            

            { evs:12,createdAt: new Date(), updatedAt: new Date()},// Warrior ring rare
            { evs:20,createdAt: new Date(), updatedAt: new Date()},// Assasin ring rare
            /*54-id*/{ evs:12,createdAt: new Date(), updatedAt: new Date()},// Monk ring rare
       
            { dmg:20, createdAt: new Date(), updatedAt: new Date()},// Warrior Axe common
            { dmg:25, createdAt: new Date(), updatedAt: new Date()},// Warrior Halberd common
            { dmg:30, createdAt: new Date(), updatedAt: new Date()},// Warrior Smasher common

            { dmg:12, createdAt: new Date(), updatedAt: new Date()},// Assassin Aquilon common
            { dmg:15, createdAt: new Date(), updatedAt: new Date()},// Assassin Stylet common

            { dmg:16, createdAt: new Date(), updatedAt: new Date()},// Monks Arcane common
            { dmg:20, createdAt: new Date(), updatedAt: new Date()},// Monks Oblivion
           /*62-id*/ { dmg:25, createdAt: new Date(), updatedAt: new Date()},// Monks Whip common


            { dmg:50, createdAt: new Date(), updatedAt: new Date()},// Warrior Axe uncommon
            { dmg:65, createdAt: new Date(), updatedAt: new Date()},// Warrior Halberd uncommon
            { dmg:80, createdAt: new Date(), updatedAt: new Date()},// Warrior Smasher uncommon

            { dmg:30, createdAt: new Date(), updatedAt: new Date()},// Assassin Aquilon uncommon
            { dmg:45, createdAt: new Date(), updatedAt: new Date()},// Assassin Stylet uncommon

            { dmg:40, createdAt: new Date(), updatedAt: new Date()},// Monks Arcane uncommon
            { dmg:50, createdAt: new Date(), updatedAt: new Date()},// Monks Oblivion uncommon
           /*70-id*/ { dmg:60, createdAt: new Date(), updatedAt: new Date()},// Monks Whip uncommon

            { dmg:120, createdAt: new Date(), updatedAt: new Date()},// Warrior Axe rare
            { dmg:140, createdAt: new Date(), updatedAt: new Date()},// Warrior Halberd rare
            { dmg:160, createdAt: new Date(), updatedAt: new Date()},// Warrior Smasher rare

            { dmg:75, createdAt: new Date(), updatedAt: new Date()},// Assassin Aquilon rare
            { dmg:100, createdAt: new Date(), updatedAt: new Date()},// Assassin Stylet rare

            { dmg:100, createdAt: new Date(), updatedAt: new Date()},// Monks Arcane rare
            { dmg:120, createdAt: new Date(), updatedAt: new Date()},// Monks Oblivion
           /*78-id*/ { dmg:140, createdAt: new Date(), updatedAt: new Date()},// Monks Whip rare


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
