const db = require('../db');

module.exports = db.defineModel('users', {
    name: db.STRING(100),
    openid: {
        type: db.STRING(100),
        unique: true
    },
    sex: db.INTEGER(2),
    nickname: db.STRING(100),
    province: db.STRING(100),
    city: db.STRING(100),
    country: db.STRING(100),
    headimgurl: db.STRING(200),
    unionid: db.STRING(100),
    mobile: db.STRING(50),
    status: db.INTEGER(2),
});
