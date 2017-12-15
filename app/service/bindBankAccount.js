'use strict'

const Service = require('egg').Service;

class bindBankAccountService extends Service {
    async bindAccount (params) {
        const { ctx } = this;
        const result = ctx.curl(ctx.app.config.mybank.url, {
            method: 'POST',
            data: params,
            dataType: 'json'
        });

        return result
    }

    async ubindAccount (params) {
        const { ctx } = this;
        const result = ctx.curl(ctx.app.config.mybank.url, {
            method: 'POST',
            data: params,
            dataType: 'json'
        });

        return result
    }
}
module.exports = bindBankAccountService;