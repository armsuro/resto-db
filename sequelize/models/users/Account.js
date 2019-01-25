const DataTypes = require('sequelize');
const bcrypt = require('bcrypt');

const Schema = {
    'email': {
        'type': DataTypes.STRING,
        'email': true,
        'allowNull': false
    },
    'password': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'role_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'organization_id': {
        'type': DataTypes.INTEGER,
        'allowNull': false
    },
    'phone': {
        'type': DataTypes.STRING,
        'allowNull': false
    },
    'full_name': {
        'type': DataTypes.STRING,
        'allowNull': false
    }
};

const Options = {
    'tableName': 'accounts',
    'timestamps': true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at',
    'hooks': {
        async beforeCreate(user) {
            return user.password = await bcrypt.hash(user.password, bcrypt.genSaltSync());
        }
    }
};

const Association = ({
    organizations,
    users
}) => {
    users.Account.belongsTo(organizations.Organization, {
        foreignKey: 'organization_id',
        as: 'Organization'
    });
    users.Account.belongsTo(users.Role, {
        foreignKey: 'role_id',
        as: 'Role'
    });
};

module.exports = seq => {
    const model = seq.define('Account', Schema, Options);

    model.prototype.validPassword = async function(password) {
        return await bcrypt.compareSync(password, this.password);
    }
    
    model.associate = Association;

    return model;
}
