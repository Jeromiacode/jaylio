const userRouter = require('./user-route');
const contactRouter = require('./contact-route');
const projectRouter = require('./project-route');
const categoryRouter = require('./category-route');

const router = require('express').Router()
router.use('/admin', userRouter);
router.use('/message', contactRouter);
router.use('/project', projectRouter);
router.use('/category', categoryRouter);

// to : App.js
module.exports = router