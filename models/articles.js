const db = require('../db');

module.exports = db.defineModel('articles', {
    title: db.STRING(100),
    content: db.STRING(100)
});
