'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Property', {
      id: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.FLOAT(3, 7)
      },
      lng: {
        type: Sequelize.FLOAT(3, 7)
      },
      address: {
        type: Sequelize.STRING
      },
      href: {
        type: Sequelize.STRING
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
