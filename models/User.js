import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

import Tierlist from './Tierlist';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true
    },
    twitterAccount: {
        type: Sequelize.STRING
    },
    contactInformation:{
        type: Sequelize.STRING
    }
}, {
    tableName: 'User',
    timestamps: true
});

// Tierlist relationship
User.hasMany(Tierlist, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

Tierlist.belongsTo(User, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

export default User;