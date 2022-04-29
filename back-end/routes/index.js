const userRouter = require('./user-rte');

const router = require('express').Router()
router.use('/user', userRouter);

// to : App.js
module.exports = router