const userController = require('../controllers/contact-ctrl');
const {contactValidator} = require('../validators/contact-val');
const bodyValidation = require('../middlewares/bodyValidation-mdw');
// const jwtVerify = require('../middlewares/jwtVerify-mdw');

const userRouter = require('express').Router();

userRouter.route('/send').post(bodyValidation(contactValidator), userController.add);

// to : index (routes)
module.exports = userRouter;