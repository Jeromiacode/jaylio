const userController = require('../controllers/user-controller');

const userRouter = require('express').Router();

userRouter.route('/login').post(userController.login);

// to : index (routes)
module.exports = userRouter;
