'use strict'

const Service = require('egg').Service;

class queryService extends Service {
    //查询网商银行账号信息
    async queryAccount (params) {
        const { ctx } = this;
        //params.service = mybank.tc.trade.query
        const result = ctx.curl(ctx.app.config.mybank.url, {
            method: 'POST',
            data: params,
            dataType: 'json'
        });

        return result
    }
}
module.exports = queryService;