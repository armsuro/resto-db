const DataTypes = require('sequelize');
const bcrypt = require('bcrypt');

const Schema = {
    'site_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'language_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'custom_icons': {
        'type': DataTypes.JSONB,
        'allowNull': false
    },
};

const Options = {
    'tableName': 'sites_payment_methods',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({
    other,
    sites
}) => {
    sites.Category.belongsTo(sites.Site, {
        foreignKey: 'site_id',
        as: 'Sites'
    });
    sites.Category.belongsTo(other.Language, {
        foreignKey: 'language_id',
        as: 'Language'
    });
};
module.exports = seq => {
    const model = seq.define('LanguageMap', Schema, Options);
    model.associate = Association;

    return model;
}