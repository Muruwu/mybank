'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 账号管理
  router.post('/getAccount', controller.account.getSubAccount);

  router.get('/query', controller.query.getSubAccount);

  router.post('/fundInNotify', controller.notify.fundInNotify);
};
