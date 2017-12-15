'use strict';
const Controller = require('egg').Controller;
class bindController extends Controller {
  async bindAccount() {
    const { ctx, service } = this;
      
    const res = await service.bindBankAccount.bindAccount(ctx.request.body);
    ctx.body = res
  }

  async ubindAccount() {
    const { ctx, service } = this;
    
    const res = await service.bindBankAccount.ubindAccount(ctx.request.body);
    ctx.body = res
  }
}

module.exports = bindController;