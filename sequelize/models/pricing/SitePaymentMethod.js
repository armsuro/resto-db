const DataTypes = require('sequelize');

const Schema = {
    'custom_filds': {
        'type': DataTypes.JSON,
        'allowNull': false
    },
    'payment_method_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'site-payment_methods',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    pricing,
    sites
}) => {
    pricing.SitePaymentMethod.belongsTo(pricing.PaymentMethod, {
        foreignKey: 'payment_method_id',
        as: 'PaymentMethod'
    });
    pricing.SitePaymentMethod.hasMany(sites.Order, {
        foreignKey: 'payment_method_id',
        as: 'SitePaymentMethod'
    });
};

module.exports = seq => {
    const model = seq.define('SitePaymentMethod', Schema, Options);
    model.associate = Association;

    return model;
}