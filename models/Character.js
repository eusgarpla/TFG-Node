import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

const Character = sequelize.define('characters', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    version: {
        type: Sequelize.STRING
    },
    gameId: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'Character',
    timestamps: true
});

export default Character;