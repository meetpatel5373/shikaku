'use strict';

const path = require('path');
const _ = require('lodash');
require('dotenv').config()

// All configurations will extend these options
// ============================================

const all = {
    env: process.env.NODE_ENV,
    // Server port
    port: process.env.PORT || 3000,
    // Server IP
    ip: process.env.IP || '0.0.0.0'

};

const NODE_ENV = (process.env.NODE_ENV != '${NODE_ENV}') ? process.env.NODE_ENV : 'development'

// Export the config object based on the NODE_ENV
// ==============================================

module.exports = _.merge(
    all,
    require('./' + NODE_ENV + '.js') || {});