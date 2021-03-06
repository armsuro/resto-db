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
    	'type': DataTypes.INTEGER,
        'allowNull': false
    },	
    'style': {
    	'type': DataTypes.TEXT,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'design_items',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
};

const Association = () => {

};
module.exports = seq => {
    const model = seq.define('DesignItems', Schema, Options);
    model.associate = Association;

    return model;
}