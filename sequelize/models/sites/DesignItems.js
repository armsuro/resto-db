const DataTypes = require('sequelize');
const bcrypt = require('bcrypt');

const Schema = {
    'name': {
        'type': DataTypes.JSONB,
        'allowNull': false
    },
    'description': {
        'type': DataTypes.JSONB,
        'allowNull': false
    },
    'items': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'style': {
        'type': DataTypes.TEXT,
        'allowNull': false
    },
    'organization_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'site_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'item_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
};

const Options = {
    'tableName': 'design_items',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    other,
    sites,
    organizations
}) => {
	sites.DesignItems.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.DesignItems.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Site'
    });
    sites.DesignItems.hasMany(other.DesignItems, {
        foreignKey: 'item_id',
        as: 'DesignItems'
    });
};
module.exports = seq => {
    const model = seq.define('DesignItems', Schema, Options);
    model.associate = Association;

    return model;
}