const userRouter = require('./user-route');

const router = require('express').Router()
router.use('/user', userRouter);

// to : App.js
module.exports = router