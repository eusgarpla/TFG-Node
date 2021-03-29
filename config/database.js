import Sequelize from 'sequelize';

export const sequelize = new Sequelize('tierlist', 'root', 'eusebiotfg', {
    host: 'localhost',
    dialect: 'mariadb'
});
