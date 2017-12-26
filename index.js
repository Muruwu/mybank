'use strict';

// npm run dev DO NOT read this file
require('egg-scripts');

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7001, // default to 7001
  worker: 1,
});
