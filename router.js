"use-strict";

module.exports = function (app) {
  var myjson = require("./controller");

  app.route("/").get(myjson.index);
  app.route("/posts").get(myjson.posts);
  app.route("/posts/:id").get(myjson.postsdetail);
};
