const model = require('../model');

  var articleM = model.articles;

// await
var fn_hello = async (ctx, next) => {


  var lists = await articleM.findAll().then(function (articles) {
    return articles;
   }).catch(function (err) {
       // error
   });
    var s = ctx.render('hello.html', { lists: lists});
};

module.exports = {
    'GET /hello/:name': fn_hello
};
