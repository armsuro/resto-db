'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('languages', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'name': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'icon': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'data': {
                'type': Sequelize.JSON,
                'allowNull': false
            },
            'type': {
                'type': Sequelize.INTEGER,
                'allowNull': false
            },
            'created_at': {
                'allowNull': false,
                'type': Sequelize.DATE,
                'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP')
            },
            'updated_at': {
                'allowNull': false,
                'type': Sequelize.DATE,
                'defaultValue': Sequelize.literal('CURRENT_TIMESTAMP')
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE languages cascade;");
    }
};