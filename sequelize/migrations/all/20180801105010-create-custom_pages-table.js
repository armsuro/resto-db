'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('custom_pages', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'name': {
                'type': Sequelize.JSON,
                'allowNull': false
            },
            'description': {
                'type': Sequelize.JSON,
                'allowNull': false
            },
            'items': {
                'type': Sequelize.JSON
            },
            'organization_id': {
                'type': Sequelize.INTEGER,
                'allowNull': false,
                'references': {
                    'model': {
                        'tableName': 'roles'
                    },
                    'key': 'id'
                },
                'onUpdate': 'cascade',
                'onDelete': 'cascade'
            },
            'site_id': {
                'type': Sequelize.INTEGER,
                'allowNull': false,
                'references': {
                    'model': {
                        'tableName': 'sites'
                    },
                    'key': 'id'
                },
                'onUpdate': 'cascade',
                'onDelete': 'cascade'
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
        return queryInterface.sequelize.query("DROP TABLE custom_pages cascade;");
    }
};