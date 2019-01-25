const DataTypes = require('sequelize');

const Schema = {
    'name': {
        'type': DataTypes.JSONB,
        'allowNull': false
    },
    'description': {
        'type': DataTypes.JSONB,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'payment_methods',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({pricing}) => {
	pricing.PaymentMethod.hasMany(pricing.SitePaymentMethod, {
        foreignKey: 'payment_method_id',
        as: 'PaymentMethod'
    });
};

module.exports = seq => {
    const model = seq.define('PaymentMethod', Schema, Options);
    model.associate = Association;

    return model;
}