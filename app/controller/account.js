'use strict';
const Controller = require('egg').Controller;
const signHelper = require('../lib/sign');

class accountController extends Controller {
  //需要商户信息做标识符
  async getSubAccount() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    
    const result = await service.account.addAccount(params);
    ctx.body = {
      result
    }
  }


}

module.exports = accountController;
