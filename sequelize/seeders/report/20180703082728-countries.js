'use strict';

const countries = require('../../data/countries.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({
        tableName: 'countries'
    }, countries);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
