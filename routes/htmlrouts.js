// Dependencies =============================================================
var express = require("express");
var _ = require("lodash");
var path = require("path");

var router = express.Router();
module.exports = router;


// Routes =============================================================

  // index route for home page
  router.get("/", function(req, res) {
    res.render("../views/homepage.html");
  });

  // route for signup page
  router.get("/map", function(req, res) {
    res.render("../views/signup.jade");
  });

  // route for forgot password
  router.get("/userHomePage", function(req, res) {
    res.render("../views/forgotpassword.jade");
  });
