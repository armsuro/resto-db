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
    'icon': {
    	'type': DataTypes.STRING,
        'allowNull': false
    },	
    'position': {
    	'type': DataTypes.INTEGER,
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
    'tableName': 'categories',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    sites
}) => {
    sites.Category.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.Category.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Site'
    });
    sites.Category.hasMany(sites.Product, {
        foreignKey: 'category_id',
        as: 'Category'
    });
};
module.exports = seq => {
    const model = seq.define('Category', Schema, Options);
    model.associate = Association;

    return model;
}