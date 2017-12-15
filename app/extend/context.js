'use strict';

const shortid = require('js-shortid');

const REQUESTID = Symbol('Context#requestId');

module.exports = {
    get requestId() {
        if (!this[REQUESTID]) {
          this[REQUESTID] = shortid.gen();
        }
    
        return this[REQUESTID];
      },
}