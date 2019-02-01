'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('templates', {
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
            'favicon': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'logo': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'styles': {
                'type': Sequelize.TEXT,
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
        return queryInterface.sequelize.query("DROP TABLE templates cascade;");
    }
};