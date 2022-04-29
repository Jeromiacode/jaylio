const userController = require('../controllers/user-ctr');
const bodyValidation = require('../middlewares/bodyValidation-mdw');
const jwtVerify = require('../middlewares/jwtVerify-mdw');
const loginValidator = require('../validators/user-val');

const userRouter = require('express').Router();

userRouter.route('/login').post(jwtVerify(), bodyValidation(loginValidator), userController.login);

// to : index (routes)
module.exports = userRouter;
