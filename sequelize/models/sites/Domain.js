const DataTypes = require('sequelize');
const Schema = {
    'name': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'dns1': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'dns2': {
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
    },
};

const Options = {
    'tableName': 'domains',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    organizations,
    sites
}) => {
    sites.Domain.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    sites.Domain.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Site'
    });
};
module.exports = seq => {
    const model = seq.define('Domain', Schema, Options);
    model.associate = Association;

    return model;
}