'use strict';

const Controller = require('egg').Controller;
const serialLib = require('../lib/getSerialNo');


class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const result = await serialLib.getSerialNo(ctx);

    ctx.body = result;
  }
}

module.exports = HomeController;
