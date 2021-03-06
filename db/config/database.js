require('dotenv').config();
module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        dialectOptions: {
            ssl: {rejectUnauthorized: false},
        },
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_HOST,
        dialectOptions: {
            ssl: {rejectUnauthorized: false},
        },
        use_env_variable: "DATABASE_URL",
    },
};