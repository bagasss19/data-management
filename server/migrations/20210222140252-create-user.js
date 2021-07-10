'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull : false,
        type: Sequelize.STRING
      },
      email: {
        allowNull : false,
        type: Sequelize.STRING,
        unique: true
      },
      NIK: {
        allowNull : false,
        type: Sequelize.INTEGER,
        unique: true
      },
      kampus: {
        allowNull : false,
        type: Sequelize.STRING
      },
      tanggal_mapaba: {
        allowNull : false,
        type: Sequelize.DATE
      },
      password: {
        allowNull : false,
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Users');
  }
};