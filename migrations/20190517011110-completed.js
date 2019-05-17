'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
     'Logs',
     'completed', {
       type: Sequelize.BOOLEAN,
       defaultValue: false,
       allowNull: false,
       refereces: {
         model: 'Users',
         key: 'id'
       }
     }
   )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Logs',
      'completed'
    )
    
  }
};

