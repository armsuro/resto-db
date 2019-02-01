'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('orders', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'address': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'phone': {
                'type': Sequelize.STRING,
                'allowNull': false
            },
            'payment_method_id': {
            	'type': Sequelize.INTEGER,
                'allowNull': false,
                'references': {
                    'model': {
                        'tableName': 'sites_payment_methods'
                    },
                    'key': 'id'
                },
                'onUpdate': 'cascade',
                'onDelete': 'cascade'
            },
            'items': {
                'type': Sequelize.JSON
            },
            'full_name': {
                'type': Sequelize.STRING,
                'allowNull': false
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
        return queryInterface.sequelize.query("DROP TABLE orders cascade;");
    }
};