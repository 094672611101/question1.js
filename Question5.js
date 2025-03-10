const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.STRING
});

sequelize.sync().then(() => {
    console.log('Database and tables synced');
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});