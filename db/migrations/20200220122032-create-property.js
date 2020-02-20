'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Property', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      propertyHereId: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.DECIMAL(11, 8)
      },
      lng: {
        type: Sequelize.DECIMAL(11, 8)
      },
      address: {
        type: Sequelize.STRING
      },
      href: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Property');
  }
};
