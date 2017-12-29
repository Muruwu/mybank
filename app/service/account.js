/**
 * 账号管理
 */
'use strict';

const Service = require('egg').Service;
const signHelper = require('../lib/sign');
const serialLib = require('../lib/getSerialNo');

class AccountService extends Service {
  async addAccount(params) {
    const { objectFilter, genSign, getSign } = signHelper;
    // params.sign = genSign(objectFilter(params, ['sign', 'sign_type']), '&');

    const res = await getSign(this.ctx, params, '&', [ 'sign', 'sign_type' ]);

    if (!res || !res.data || !res.data.signedStr) {
      throw new Error('failed get signedStr');
    }

    params.sign = res.data.signedStr;
    const result = await this.ctx.curl(this.ctx.app.config.mybank.url, {
      method: 'POST',
      data: params,
      dataType: 'json',
    });
    result.params = params;
    // 插入一条记录， 并返回信息
    const seqNo = await serialLib.getSerialNo(this.ctx);
    const insertOne = await this.ctx.model.Account.addAccount({
        clientName: params.enterprise_name,
        clientId: seqNo,
        //bankAccount:
        //bankAccountName
    })
    // 返回账号信息和创建结果
    return result.data
  }

  async getAccountList(params) {
    const { ctx } = this;
    const users = ctx.model.Account.findAll({
      attributes: [ 'clientId', 'clientName', 'mobile', 'mobile', 'totalAmount' ],
    });

    return users;
  }

  async getAccountInfo(client_id) {
    const { ctx } = this;
    const user = ctx.model.Account.find({
      clientId: client_id,
    });
    const bills = ctx.model.Record.findAll({
      attributes: [ 'bankAccount', 'paymentTime' ],
      where: {
        clientId: client_id,
        isAccomplish: true,
      },
    });

    return {
      user,
      bills,
    };
  }
}

module.exports = AccountService;
