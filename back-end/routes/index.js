const userRouter = require('./user-route');
const contactRouter = require('./contact-route');

const router = require('express').Router()
router.use('/admin', userRouter);
router.use('/message', contactRouter);

// to : App.js
module.exports = router