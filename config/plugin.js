'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
    redis: {
        enable: true,
        package: 'egg-redis'
    },
    httperror: {
        enable: true,
        package: '@yunding/egg-httperror',
    },
    validate: {
        enable: true,
        package: 'egg-validate'
    }
}
