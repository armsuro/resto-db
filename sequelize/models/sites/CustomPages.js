const DataTypes = require('sequelize');

const Schema = {
    'name': {
    	'type': DataTypes.JSON,
        'allowNull': false
    },
    'description': {
    	'type': DataTypes.JSON,
        'allowNull': false
    },
    'items': {
    	'type': DataTypes.JSON,
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
};

const Options = {
    'tableName': 'custom_pages',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    sites
}) => {
    sites.CustomPages.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.CustomPages.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Site'
    });
};
module.exports = seq => {
    const model = seq.define('CustomPages', Schema, Options);
    model.associate = Association;

    return model;
}