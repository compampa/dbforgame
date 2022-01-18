'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BattleLogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      battle_room_id: {
        type: Sequelize.INTEGER,
          references: {
            model: 'BattleRooms',
              key: 'id'
          }
      },
      hit_id: {
        type: Sequelize.INTEGER,
          references: {
            model: 'hitens',
              key: 'id'
          }
      },
      player_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BattleLogs');
  }
};