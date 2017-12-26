/**
 * 处理参数签名
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function genSign(params, appSecret) {
  const paramsStr = Object.keys(params).sort().map(key => key + '=' + params[key])
    .join(appSecret);
  // paramsStr = JSON.stringify(paramsStr).replace(/\//g, '\\/');

  const privateKey = fs.readFileSync(path.join(__dirname, '../../config/mybank_private.pem')).toString();
  const sign = crypto.createSign('RSA-SHA1');
  sign.update(paramsStr, 'utf8');

  return sign.sign(privateKey, 'base64'); // encodeURIComponent
}

function verifySign(params, signature) {
  const verify = crypto.createVerify('RSA-SHA1');
  const publicKey = fs.readFileSync(path.join(__dirname, '../../config/app_public_key.pem')).toString();
  const paramStr = Object.keys(params).sort().map(key => key + '=' + params[key])
    .join('&');
  verify.update(paramStr);

  return verify.verify(publicKey, signature, 'base64');
}

// 参数签名去除部分字段
function objectFilter(params, discardArr) {
  if (!discardArr || (discardArr && discardArr.length == 0) || !Array.isArray(discardArr)) {
    return params;
  }
  const filtered = Object.keys(params)
    .filter(key => !discardArr.includes(key) && params[key] != '')
    .reduce((obj, key) => {
      obj[key] = params[key];
      return obj;
    }, {});

  return filtered;
}

// 获取天威参数签名
async function getSign(ctx, params, appSecret = '&', discardArr) {
  if (discardArr && !Array.isArray(discardArr)) {
    return new Error('invalid array params');
  }
  const filtered = Object.keys(params)
    .filter(key => !discardArr.includes(key) && params[key] != '')
    .reduce((obj, key) => {
      obj[key] = params[key];
      return obj;
    }, {});

  const preStr = Object.keys(filtered).sort().map(key => key + '=' + params[key])
    .join(appSecret);
  console.log('preStr: ' + preStr);
  const res = await ctx.curl(ctx.app.config.mybank.signUrl, {
    data: {
      str: preStr,
    },
    dataType: 'json',
  });
  return res;
}

module.exports = {
  genSign,
  verifySign,
  objectFilter,
  getSign,
};
