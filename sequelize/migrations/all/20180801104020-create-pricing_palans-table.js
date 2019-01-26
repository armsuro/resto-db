'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pricing_plans', {
            'id': {
                'allowNull': false,
                'autoIncrement': true,
                'primaryKey': true,
                'type': Sequelize.INTEGER
            },
            'title': {
                'type': Sequelize.JSONB,
                'allowNull': false
            },
            'description': {
                'type': Sequelize.JSONB,
                'allowNull': false
            },
            'mountly_price': {
                'type': Sequelize.FLOAT,
                'allowNull': false
            },
            'yearly_price': {
                'type': Sequelize.FLOAT,
                'allowNull': false
            },
            'permissions': {
                'type': Sequelize.JSONB,
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
        }).then(()=> {
            return queryInterface.bulkInsert('pricing_plans', [{
                "title": JSON.stringify({"eng": "test"}),
                "description": JSON.stringify({"eng": "test"}),
                "mountly_price": 10,
                "yearly_price": 100,
                "permissions": JSON.stringify({"eng": "test"})
            }]);
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.query("DROP TABLE pricing_plans cascade;");
    }
};