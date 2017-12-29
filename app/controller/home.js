'use strict';

const Controller = require('egg').Controller;
const serialLib = require('../lib/getSerialNo');


class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const params = ctx.request.body || ctx.request.query;
    //params check
    
    const result = await serialLib.getSerialNo(ctx);

    ctx.body = {
      serialNo: result
    };
  }
}

module.exports = HomeController;
