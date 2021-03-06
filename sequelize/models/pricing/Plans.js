const DataTypes = require('sequelize');

const Schema = {
    'title': {
        'type': DataTypes.JSON,
        'allowNull': false
    },
    'description': {
        'type': DataTypes.JSON,
        'allowNull': false
    },
    'mountly_price': {
        'type': DataTypes.FLOAT,
        'allowNull': false
    },
    'yearly_price': {
        'type': DataTypes.FLOAT,
        'allowNull': false
    },
    'permissions': {
        'type': DataTypes.JSON,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'pricing_plans',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = () => {

};

module.exports = seq => {
    const model = seq.define('Plan', Schema, Options);
    model.associate = Association;

    return model;
}