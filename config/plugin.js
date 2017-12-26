'use strict';

// had enabled by egg
// exports.static = true;
// module.exports = {
//     sequelize: {
//         enable: true,
//         package: 'egg-sequelize',
//     },
//     redis: {
//         enable: true,
//         package: 'egg-redis'
//     }
// }

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
