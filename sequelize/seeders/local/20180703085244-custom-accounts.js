'use strict';

const Organization = require('../../models/local/Organization');
const User = require('../../models/local/User');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const OrganizationModel = Organization(queryInterface.sequelize);
    const UserModel = User(queryInterface.sequelize);

    return OrganizationModel.create({
        name: "FourInOne"
    }).then(org => {
        return UserModel.create({
            organization_id: org.id,
            first_name: "Vahan",
            last_name: "Adiyan",
            email: "vahan.adiyan@betconstruct.com",
            role_id: 4
        });
    });
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
