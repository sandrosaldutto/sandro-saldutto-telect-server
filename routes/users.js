const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.route("/register")
    .post(controllers.addUser);

router.route("/login")
    .post(controllers.login);

module.exports = router;
