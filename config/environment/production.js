'use strict';

require('dotenv').config()
module.exports = {
    ip: process.env.IP || "0.0.0.0",
    serverPort: process.env.PORT || 3000,
    currentVersion: '0.0.1',
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_DATABASE || 'family',
    dialect: process.env.DB_DIALECT || 'mysql',
    debug: process.env.DEBUG || 'false',
    poolmax: process.env.POOL_MAX || 5,
    poolmin: process.env.POOL_MIN || 0,
    poolacquire: process.env.POOL_ACQUIRE || 30000,
    poolidle: process.env.POOL_IDLE || 10000,
};