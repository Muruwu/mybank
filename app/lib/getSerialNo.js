'use strict';
const moment = require('moment');

exports.getSerialNo = async (ctx, type) => {

    let redisKey = type || 'incr#mybank';
    
    const incrNo = await ctx.app.redis.get(type);
    if (!incrNo) {
        await ctx.app.redis.set(type, 10000, 'EX', 60 * 60 * 24)
        incrNo = 10000;
    }
    await ctx.app.redis.incr(type);

    return moment().format('YYYYMMDDhhmm') +  incrNo;
}
