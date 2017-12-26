'use strict';
const Controller = require('egg').Controller;
class queryController extends Controller {
  async queryAccountInfo() {
    const { ctx, service } = this;

    const res = await service.query.queryAccount(ctx.request.body);
    ctx.body = res;
  }

  async getRegisterInfo() {
    const { ctx, service } = this;

    ctx.body = res;
  }
}

module.exports = queryController;
