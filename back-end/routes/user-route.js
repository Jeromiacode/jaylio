const userController = require('../controllers/user-ctrl');
const { loginValidator, registerValidator } = require('../validators/user-val');
const bodyValidation = require('../middlewares/bodyValidation-mdw');

const userRouter = require('express').Router();

userRouter.route('/login').post(bodyValidation(loginValidator), userController.login);
userRouter.route('/register').post(bodyValidation(registerValidator), userController.registerAdmin);

// to : index (routes)
module.exports = userRouter;
