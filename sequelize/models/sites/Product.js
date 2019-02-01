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
    'category_id': {
    	'type': DataTypes.INTEGER,
        'allowNull': false
    },
};

const Options = {
    'tableName': 'products',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    sites
}) => {
    sites.Product.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.Product.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Site'
    });
    sites.Product.belongsTo(sites.Category, {
        foreignKey: 'category_id',
        as: 'Category'
    });
};
module.exports = seq => {
    const model = seq.define('Product', Schema, Options);
    model.associate = Association;

    return model;
}