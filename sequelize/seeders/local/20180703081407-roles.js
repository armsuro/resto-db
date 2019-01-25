'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert({
        schema: 'local',
        tableName: 'roles'
    }, [
        {
            id: 1,
            name: 'League Owner',
            slug: 'league_owner'
        },
        {
            id: 2,
            name: 'League Manager',
            slug: 'league_manager'
        },
        {
            id: 3,
            name: 'League Streamer',
            slug: 'league_streamer'
        },
        {
            id: 4,
            name: 'Moderator',
            slug: 'moderator'
        },
        {
            id: 5,
            name: 'Administrator',
            slug: 'admin'
        },
        {
            id: 6,
            name: 'Client',
            slug: 'client'
        },
        {
            id: 7,
            name: 'Media Company',
            slug: 'media_company'
        },
        {
            id: 8,
            name: 'Reporter',
            slug: 'reporter'
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({
        schema: 'local',
        tableName: 'roles'
    });
  }
};
