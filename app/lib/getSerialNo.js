'use strict';
const moment = require('moment');

exports.getSerialNo = async (ctx, type) => {

  const redisKey = type || 'incr#mybank';

  let incrNo = await ctx.app.redis.get(redisKey);
  if (!incrNo) {
    incrNo = 10001;
    await ctx.app.redis.set(redisKey, 10001, 'EX', 60 * 60 * 24);
  }
  await ctx.app.redis.incr(redisKey);

  return moment().format('YYYYMMDDhhmm') + incrNo;
};
