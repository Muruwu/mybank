'use strict';

const Parameter = require('parameter');
const PARAMETER = Symbol('Application#parameter');

module.exports = {
  get paramater() {
    return this[PARAMETER] || new Parameter();
  },

  validate(rules) {
    return async next => {
      const data = this.request.method.toLowerCase() == 'get' ? this.request.query : this.request.body;
      const errors = this.app.paramater.validate(rules, data);

      if (errors) {
        this.body = {
          errors,
        };

        throw new Error(400, 'bad request params');
      }

      await next;
    };
  },
};
