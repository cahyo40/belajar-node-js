"use-strict";

var response = require("./res");
var koneksi = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Runnig guys", res);
};

exports.posts = function (req, res) {
  koneksi.query("select*from posts", function (err, rows, fields) {
    if (err) {
      koneksi.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.postsDetail = function (req, res) {
  let id = req.params.id;
  koneksi.query(
    "select*from posts where id=?",
    [id],
    function (err, rows, fields) {
      if (err) {
        koneksi.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
exports.postsCreate = function (req, res) {
  let title = req.body.title;
  let content = req.body.content;
  koneksi.query(
    "insert into posts(title,content) values(?,?)",
    [title, content],
    function (err, rows, fields) {
      if (err) {
        koneksi.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
exports.postsUpdate = function (req, res) {
  let id = req.params.id;
  let title = req.body.title;
  let content = req.body.content;
  koneksi.query(
    "update posts set title=?,content=? where id=?",
    [title, content, id],
    function (err, rows, fields) {
      if (err) {
        koneksi.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
exports.postDelete = function (req, res) {
  let id = req.params.id;

  koneksi.query(
    "delete from posts where id=?",
    [id],
    function (err, rows, fields) {
      if (err) {
        koneksi.log(err);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
