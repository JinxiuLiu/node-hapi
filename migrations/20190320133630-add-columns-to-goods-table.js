'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('goods', 'views', { type: Sequelize.INTEGER })
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('goods', 'views')
  ])
};
