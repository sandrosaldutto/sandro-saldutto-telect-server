const router = require('express').Router();
const usersController = require('../controllers/userControllers');

router.route('/register')
    .post(usersController.addOne);

router.route('/:userId')
    .get(usersController.getOne)
    .put(usersController.editOne)
    .delete(usersController.deleteOne)
module.exports = router;