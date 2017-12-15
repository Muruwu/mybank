'use strict';

const Controller = require('egg').Controller;
const { objectFilter, verifySign } = require('../lib/sign');

class notifyController extends Controller {
  async fundInNotify() {
    const {ctx, service} = this;
    let params = ctx.request.body;
    
    // let verifyResult = verifySign(objectFilter(params, ['sign']), params.sign);
    // if(!verifyResult) {
    //   throw new Error('failed to verify parameters');
    // }
    
    
    // 返回'success'
    this.ctx.body = 'success';
  }
}

module.exports = notifyController;
