const DataTypes = require('sequelize');

const Schema = {
    'address': {
    	'type': DataTypes.STRING,
        'allowNull': false
    },
	'phone': {
		'type': DataTypes.STRING,
        'allowNull': false
	},
	'payment_method_id': {
		'type': DataTypes.INTEGER,
        'allowNull': false
	},
	'items': {
		'type': DataTypes.JSON,
        'allowNull': false
	},
	'full_name': {
		'type': DataTypes.STRING,
        'allowNull': false
	},
	'organization_id': {
		'type': DataTypes.INTEGER,
        'allowNull': false
	},
	'site_id': {
		'type': DataTypes.INTEGER,
        'allowNull': false
	}
};

const Options = {
    'tableName': 'orders',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    sites,
    pricing
}) => {
    sites.Order.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.Order.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Site'
    });
    sites.Order.belongsTo(pricing.SitePaymentMethod, {
        foreignKey: 'payment_method_id',
        as: 'PaymentMethid'
    });
};
module.exports = seq => {
    const model = seq.define('Order', Schema, Options);
    model.associate = Association;

    return model;
}