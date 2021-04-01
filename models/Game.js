import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

import Tierlist from './Tierlist';
import Character from './Character';

const Game = sequelize.define('games', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    platform: {
        type: Sequelize.STRING
    },
    year: {
        type: Sequelize.INTEGER,
        min: 1950,
    }
}, {
    tableName: 'Game',
    timestamps: true
});

// Tierlist relationship
Game.hasMany(Tierlist, {
    foreignKey: 'gameId',
    sourceKey: 'id'
});

Tierlist.belongsTo(Game, {
    foreignKey: 'gameId',
    sourceKey: 'id'
});

// Character relationship
Game.hasMany(Character, {
    foreignKey: 'gameId',
    sourceKey: 'id'
});

Character.belongsTo(Game, {
    foreignKey: 'gameId',
    sourceKey: 'id'
})

export default Game;
