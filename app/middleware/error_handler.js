'use strict'
const errorMapping = require('../lib/error_mapping');

module.exports = (_, app) => {
    return async next => {
        const params = {
            ReqId: this.requestId,
            ErrorNo: 0,
            ErrorMsg: ''
        };

        try {
            await next;

            if (!this.body) {
                throw new Error('null body')
            }
        } catch (err) {
            let errObject = getErrorObj(err);
            [params.ErrorNo, params.ErrorMsg] = [errObject.ErrorNo, errObject.ErrorMsg];

            if (errObject.status) {
                this.status = errObject.status
            }
        }

        if (!this.body) {
            this.body = {}
        }

        Object.assign(this.body, params)
    }
}

function getErrorObj(err) {
    const name = err.name;
    const code = parseInt(err.code);
    const message = code && err.message || err.code;

    const errString = errorMapping[name] && errorMapping[name][message] || '500: Internal Server Error';
    const errArray = errString.split(': ');

    return { status: code, ErrNo: parseInt(errArray[0]), ErrMsg: errArray[1] };
}