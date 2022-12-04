"use-strict";

module.exports = function (app) {
  var myjson = require("./controller");

  app.route("/").get(myjson.index);
  app.route("/posts").get(myjson.posts);
  app.route("/posts").post(myjson.postsCreate);
  app.route("/posts/:id").get(myjson.postsDetail);
  app.route("/posts/:id").put(myjson.postsUpdate);
  app.route("/posts/:id").delete(myjson.postDelete);
};
