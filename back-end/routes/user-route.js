const userController = require('../controllers/user-controller');

const userRouter = require('express').Router();

userRouter.route('/')
                .get(userController.register);

// to : index (routes)
module.exports = userRouter