const userController = require('../controllers/user-ctrl');
const userValidator = require('../validators/user-val');
const bodyValidation = require('../middlewares/bodyValidation-mdw');

const userRouter = require('express').Router();

userRouter.route('/login').post(bodyValidation(userValidator), userController.login);


// to : index (routes)
module.exports = userRouter;
