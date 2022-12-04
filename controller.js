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

exports.postsdetail = function (req, res) {
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
