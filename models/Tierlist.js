import Sequelize from 'sequelize';
import { sequelize } from '../config/database';

const Tierlist = sequelize.define('tierlists', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING
    },
    likes: {
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.DATE
    },
    userId: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'Tierlist',
    timestamps: true
});

Tierlist.associate = (models) => {
    Tierlist.belongsToMany(models.User, {
        through: models.UserTierlist,
        as: 'Tierlists',
        foreignKey: 'userId'
    });
}
export default Tierlist;