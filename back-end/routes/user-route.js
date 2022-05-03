const userController = require('../controllers/user-ctrl');
const loginValidator = require('../validators/user-val');
const bodyValidation = require('../middlewares/bodyValidation-mdw');
// const jwtVerify = require('../middlewares/jwtVerify-mdw');

const userRouter = require('express').Router();

userRouter.route('/login').post(bodyValidation(loginValidator), userController.login);

// to : index (routes)
module.exports = userRouter;
