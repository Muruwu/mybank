'use strict';
/**
 * 银行对账
 */
const Controller = require('egg').Controller;

class reconController extends Controller {
  async getSubAccount() {
    const { ctx, service } = this;
    const q = ctx.query.q;
    const result = await ctx.curl(`https://cn.bing.com/search?q=${q}`);
    ctx.status = 301;
  }
}

module.exports = reconController;
