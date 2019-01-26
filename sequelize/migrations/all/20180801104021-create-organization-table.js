'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('organizations', {
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
            'phone': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'address': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'country': {
                'type': Sequelize.STRING,
                'allowNull': true
            },
            'is_demo': {
                'type': Sequelize.BOOLEAN,
                'defaultValue': false
            },
            'demo_finished_date': {
                'type': Sequelize.DATE,
                'allowNull': true
            },
            'pricing_id': {
                'type': Sequelize.INTEGER,
                'allowNull': true,
                'references': {
                    'model': {
                        'tableName': 'pricing_plans'
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
        }).then(() => {
            return queryInterface.bulkInsert('organizations', [{
                'name': 'Aminaistator organization',
                'phone': 888888888888,
                'address': 'Zeytun',
                'country': 'Armenia'
            }]);
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE organizations cascade;");
    }
};