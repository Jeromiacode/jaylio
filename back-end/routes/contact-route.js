const userController = require('../controllers/contact-ctrl');
const messageValidator = require('../validators/contact-val');
const bodyValidation = require('../middlewares/bodyValidation-mdw');
const jwtVerify = require('../middlewares/jwtVerify-mdw');

const userRouter = require('express').Router();

userRouter.route('/')
.get(jwtVerify(), userController.getAll)

userRouter.route('/:id([0-9]+)')
.delete(jwtVerify(), userController.delete)
.get(jwtVerify(), userController.getOne)

userRouter.route('/send').post(bodyValidation(messageValidator), userController.create)

// to : index (routes)
module.exports = userRouter;