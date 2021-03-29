import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING
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


export default User;