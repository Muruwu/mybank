'use strict';

/**
 * 客户转账时插入转账记录
 */

module.exports = app => {
  const { INTEGER, STRING, DATE, NOW, BOOLEAN } = app.Sequelize;

  const Record = app.model.define('Record', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    tradeNo: { type: STRING, allowNull: false },
    clientId: STRING,
    bankAccount: STRING,
    paymentTime: DATE,
    isAccomplish: {
      type: BOOLEAN,
      // defaultValue: false
    },
  }, {
    underscored: true,
    freezeTableName: false,
    tableName: 'record',
    index: [ 'tradeNo', 'clientId' ],
  });
  Record.associate = function() {
    app.model.Record.belongsTo(app.model.Account);
  };
  return Record;
};
