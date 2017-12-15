'use strict';

/**
 * 客户转账时插入转账记录
 */

module.exports = app => {
    const {INTEGER, STRING, DATE, NOW, BOOLEAN} = app.Sequelize;

    const Record = app.model.define('Record', {
        tradeNo: {
            type: STRING,
            comment: '平台转账流水号'
        },
        clientId: STRING,
        bankAccount: STRING,
        paymentTime: {
            type: DATE,
            defaultValue: NOW
        },
        isAccomplish: {
            type: BOOLEAN,
            defaultValue: false
        }
    }, {
        underscored: true,
        freezeTableName: false,
        tableName: 'record',
        index: ['tradeNo', 'clientId']
    });
    Record.associate = function() {
        app.model.Record.belongsTo(app.model.Account, {
            as: 'account',
            // foreignKey: 'clientId' //重复定义fk
        })
    }
    return Record
}
