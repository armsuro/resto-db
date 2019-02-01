const DataTypes = require('sequelize');

const Schema = {
    'name': {
		'type': DataTypes.STRING,
        'allowNull': false
    },
    'favicon': {
    	'type': DataTypes.STRING,
        'allowNull': false
    },
    'logo': {
    	'type': DataTypes.STRING,
        'allowNull': false
    },
    'styles': {
    	'type': DataTypes.TEXT,
        'allowNull': false
    },
    'organization_id': {
    	'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'template_id': {
    	'type': DataTypes.INTEGER,
        'allowNull': false
    },
};

const Options = {
    'tableName': 'sites',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    sites
}) => {
    sites.Site.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.Site.belongsTo(sites.Template, {
        foreignKey: 'template_id',
        as: 'Template'
    });
    sites.Site.hasMany(sites.Domain, {
        foreignKey: 'site_id',
        as: 'Domains'
    });
    sites.Site.hasMany(sites.Category, {
        foreignKey: 'site_id',
        as: 'Sites'
    });
};
module.exports = seq => {
    const model = seq.define('Site', Schema, Options);
    model.associate = Association;

    return model;
}