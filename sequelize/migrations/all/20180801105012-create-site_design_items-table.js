'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('site_design_items', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'name': {
                'type': Sequelize.JSONB,
                'allowNull': false
            },
            'description': {
                'type': Sequelize.JSONB,
                'allowNull': false
            },
            'items': {
                'type': Sequelize.JSONB
            },
            'style': {
                'type': Sequelize.TEXT
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
            'item_id': {
                'type': Sequelize.INTEGER,
                'allowNull': false,
                'references': {
                    'model': {
                        'tableName': 'design_items'
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
        return queryInterface.sequelize.query("DROP TABLE site_design_items cascade;");
    }
};