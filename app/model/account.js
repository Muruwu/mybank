/**
 * 平台账号
 */
const uuid = require('uuid/v1');
module.exports = app => {
    const {INTEGER, STRING, BOOLEAN} = app.Sequelize;

    const Account = app.model.define('Account', {
        clientId: {
            type:STRING,
            primaryKey: true,
        },
        clientName: STRING,
        mobile: {
            type: STRING,
            unique: true
        },
        bankAccount: STRING,
        bankAccountName: STRING,
        totalAmount: {
            type: INTEGER,
            defaultValue: 0
        },
        invalid: {
            type: BOOLEAN,
            defaultValue: false
        },
    }, {
        underscored: true,
        freezeTableName: false,
        tableName: 'account',
    });

    Account.addAccount = async function(record) {
        record.clientId = uuid();
        return await this.create(record);
    };
    
    Account.associate = function() {
        app.model.Account.hasMany(app.model.Record);

    }
    return Account
}