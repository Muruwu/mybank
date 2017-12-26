'use strict';

const pem = require('pem');
const fs = require('fs');
const xrsa = require('./rsa');
const crypto = require('crypto');
const pfx = fs.readFileSync('../../config/yinqizhiliantest.pfx');
const s = 'account_type=BASIC&charset=UTF-8&partner_id=200001242399&service=mybank.tc.user.account.balance&uid=20171213574&version=2.0'
pem.readPkcs12(pfx, { p12Password: "mayibank" }, (err, cert) => {
    if (err) console.log(err)
    // console.log(cert)
    // const signed = new xrsa({
    //     privateKey: cert.key
    // })._sign(s)
    // console.log(signed)
    const sign = crypto.createSign('RSA-SHA1');
    sign.update(s, 'utf8');
    console.log(sign.sign({
        key:cert.key,
        passphrase: 'mayibank'
    }, 'base64'))
})
