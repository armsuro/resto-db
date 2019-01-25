const DataTypes = require('sequelize');

const Schema = {
    'name': {
		'type': DataTypes.STRING,
        'allowNull': false
    },
	'icon': {
		'type': DataTypes.STRING,
        'allowNull': false
	},
	'data': {
		'type': DataTypes.JSONB,
        'allowNull': false
	},
	'type': {
		'type': DataTypes.INTEGER,
        'allowNull': false
	},
};

const Options = {
    'tableName': 'languages',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = () => {

};

module.exports = seq => {
    const model = seq.define('Language', Schema, Options);
    model.associate = Association;

    return model;
}