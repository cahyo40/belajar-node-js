const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// parse aplikasi berformat json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// panggil router

var routes = require("./router");
routes(app);

app.listen(3001, () => {
  console.log("Server dimulai");
});
