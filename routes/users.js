const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userControllers");

router.route("/register").post(usersController.addUser);

router.route("/login").post(usersController.login);

// router
//   .route("/:userId")
//   .get(usersController.getUser)
//   .put(usersController.editUser)
//   .delete(usersController.deleteUser);
module.exports = router;
