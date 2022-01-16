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
          title: "common",
          stat_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
          title: "common",
          stat_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
          stat_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "common",
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
          title: "uncommon",
          stat_id: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
          stat_id: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "uncommon",
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
            title: "rare",
            stat_id: 28,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "rare",
            stat_id: 29,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: "rare",
            stat_id: 30,
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
