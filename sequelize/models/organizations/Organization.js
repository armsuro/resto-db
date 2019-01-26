const DataTypes = require('sequelize');
const bcrypt = require('bcrypt');

const Schema = {
    'name': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'phone': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'address': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'country': {
        'type': DataTypes.STRING,
        'allowNull': true
    },
    'pricing_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
};

const Options = {
    'tableName': 'organizations',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    users,
    sites,
    pricing
}) => {
    organizations.Organization.belongsTo(pricing.Plan, {
        'foreignKey': 'pricing_id',
        'as': 'Plan'
    });
    organizations.Organization.hasMany(users.Account, {
        'foreignKey': 'organization_id',
        'as': 'Users'
    });
    organizations.Organization.hasMany(sites.Site, {
        'foreignKey': 'organization_id',
        'as': 'Sites'
    });
    organizations.Organization.hasMany(sites.Domain, {
        'foreignKey': 'organization_id',
        'as': 'Domains'
    });
};

module.exports = seq => {
    const model = seq.define('Organization', Schema, Options);
    model.associate = Association;

    return model;
}
