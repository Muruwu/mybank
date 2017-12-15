'use strict';
const Controller = require('egg').Controller;
const signHelper = require('../lib/sign');

class accountController extends Controller {
  async getSubAccount() {
    const { ctx, service } = this;
    let params = ctx.request.body;
    
    let result = await service.account.addAccount(params);
    ctx.body = result;
    ctx.status = 200;
  }

  
}

module.exports = accountController;
