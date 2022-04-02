const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.route("/")
    .post(controllers.addShow)
    
router.route("/:userId")
    .get(controllers.getAllShowsByUser);


module.exports = router;