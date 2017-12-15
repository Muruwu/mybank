'use strict';

require('extend-error');

const CLIENTERROR = Symbol('Application#ClientError');
const SERVERERROR = Symbol('Application#ServerError');

const HTTPBADREQUEST = Symbol('Application#HttpBadRequest');
const HTTPUNAUTHORIZED = Symbol('Application#HttpUnauthorized');
const HTTPFORBIDDEN = Symbol('Application#HttpForbidden');
const HTTPNOTFOUND = Symbol('Application#HttpNotFound');
const HTTPCONFLICT = Symbol('Application#HttpConflict');
const HTTPINTERNALSERVERERROR = Symbol('Application#HttpInternalServerError');
const HTTPNOTIMPLEMENTED = Symbol('Application#HttpNotImplemented');
const HTTPBADGATEWAY = Symbol('Application#HttpBadGateway');
const HTTPSERVICEUNAVAILABLE = Symbol('Application#HttpServiceUnavailable');
const HTTPGATEWAYTIMEOUT = Symbol('Application#HttpGatewayTimeout');

module.exports = {
  get ClientError() {
    if (!this[CLIENTERROR]) {
      this[CLIENTERROR] = Error.extend('ClientError', 400);
    }

    return this[CLIENTERROR];
  },

  get ServerError() {
    if (!this[SERVERERROR]) {
      this[SERVERERROR] = Error.extend('ServerError', 500);
    }

    return this[SERVERERROR];
  },

  get HttpBadRequest() {
    if (!this[HTTPBADREQUEST]) {
      this[HTTPBADREQUEST] = this.ClientError.extend('HttpBadRequest', 400);
    }

    return this[HTTPBADREQUEST];
  },

  get HttpUnauthorized() {
    if (!this[HTTPUNAUTHORIZED]) {
      this[HTTPUNAUTHORIZED] = this.ClientError.extend('HttpUnauthorized', 401);
    }

    return this[HTTPUNAUTHORIZED];
  },

  get HttpForbidden() {
    if (!this[HTTPFORBIDDEN]) {
      this[HTTPFORBIDDEN] = this.ClientError.extend('HttpForbidden', 403);
    }

    return this[HTTPFORBIDDEN];
  },

  get HttpNotFound() {
    if (!this[HTTPNOTFOUND]) {
      this[HTTPNOTFOUND] = this.ClientError.extend('HttpNotFound', 404);
    }

    return this[HTTPNOTFOUND];
  },

  get HttpConflict() {
    if (!this[HTTPCONFLICT]) {
      this[HTTPCONFLICT] = this.ClientError.extend('HttpConflict', 409);
    }

    return this[HTTPCONFLICT];
  },

  get HttpInternalServerError() {
    if (!this[HTTPINTERNALSERVERERROR]) {
      this[HTTPINTERNALSERVERERROR] = this.ServerError.extend('HttpInternalServerError', 500);
    }

    return this[HTTPINTERNALSERVERERROR];
  },

  get HttpNotImplemented() {
    if (!this[HTTPNOTIMPLEMENTED]) {
      this[HTTPNOTIMPLEMENTED] = this.ServerError.extend('HttpNotImplemented', 501);
    }

    return this[HTTPNOTIMPLEMENTED];
  },

  get HttpBadGateway() {
    if (!this[HTTPBADGATEWAY]) {
      this[HTTPBADGATEWAY] = this.ServerError.extend('HttpBadGateway', 502);
    }

    return this[HTTPBADGATEWAY];
  },

  get HttpServiceUnavailable() {
    if (!this[HTTPSERVICEUNAVAILABLE]) {
      this[HTTPSERVICEUNAVAILABLE] = this.ServerError.extend('HttpServiceUnavailable', 503);
    }

    return this[HTTPSERVICEUNAVAILABLE];
  },

  get HttpGatewayTimeout() {
    if (!this[HTTPGATEWAYTIMEOUT]) {
      this[HTTPGATEWAYTIMEOUT] = this.ServerError.extend('HttpGatewayTimeout', 504);
    }

    return this[HTTPGATEWAYTIMEOUT];
  },
};
