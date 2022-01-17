"use strict";

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
    await queryInterface.bulkInsert(
      "Grades",
      [
        {
          title: "common",
          stat_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "uncommon",
          stat_id: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //weapon
        {
          title: "common",
          stat_id: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "common",
          stat_id: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 61,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 62,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 63,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 69,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 71,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 72,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 73,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 74,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 76,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "rare",
          stat_id: 78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Grades", null, {});
  },
};
