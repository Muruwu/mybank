'use strict';
const errorMapping = require('../lib/error_mapping');

module.exports = (options, app) => {
  return async (ctx, next) => {
    const params = {
      ReqId: ctx.requestId,
      ErrorNo: 0,
      ErrorMsg: '',
    };

    try {
      await next();

      if (!ctx.body) {
        throw app.HttpNotFound('ServiceNotFound')
      }
    } catch (err) {
      const errObject = getErrorObj(err);
      [ params.ErrorNo, params.ErrorMsg ] = [ errObject.ErrorNo, errObject.ErrorMsg ];

      if (errObject.status) {
        ctx.status = errObject.status;
      }
    }

    if (!ctx.body) {
      ctx.body = {};
    }

    Object.assign(ctx.body, params);
  };
};

function getErrorObj(err) {
  const name = err.name;
  const code = parseInt(err.code);
  const message = code && err.message || err.code;

  const errString = errorMapping[name] && errorMapping[name][message] || '500: Internal Server Error';
  const errArray = errString.split(': ');

  return { status: code, ErrNo: parseInt(errArray[0]), ErrMsg: errArray[1] };
}
