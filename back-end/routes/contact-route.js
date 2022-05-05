const userController = require('../controllers/contact-ctrl');
const {messageValidator} = require('../validators/contact-val');
const bodyValidation = require('../middlewares/bodyValidation-mdw');
// const jwtVerify = require('../middlewares/jwtVerify-mdw');

const userRouter = require('express').Router();

userRouter.route('/send').post(bodyValidation(messageValidator), userController.addMessage);
userRouter.route('/delete').delete(bodyValidation(messageValidator), userController.deleteMessage);

// to : index (routes)
module.exports = userRouter;