module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    database: 'github',
    password: 'admin',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};