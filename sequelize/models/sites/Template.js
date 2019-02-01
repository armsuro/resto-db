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
	}
};

const Options = {
    'tableName': 'templates',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = ({sites}) => {
	sites.Template.hasMany(sites.Site, {
        foreignKey: 'template_id',
        as: 'Template'
    });
};

module.exports = seq => {
    const model = seq.define('Template', Schema, Options);
    model.associate = Association;

    return model;
}