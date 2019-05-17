'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Logs',
      'genre',
      {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Logs',
      'genre',
      {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    )
  }
};
