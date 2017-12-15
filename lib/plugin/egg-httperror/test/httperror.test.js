'use strict';

const mock = require('egg-mock');

describe('test/httperror.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/httperror-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, httperror')
      .expect(200);
  });
});
