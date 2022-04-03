const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.route("/")
    .post(controllers.addShow)
    
router.route("/:userId")
    .get(controllers.getAllShowsByUser)
    .delete(controllers.deleteShowByUser);


module.exports = router;