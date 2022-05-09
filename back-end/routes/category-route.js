const categoryController = require('../controllers/category-ctrl');
// const { projectValidator } = require('../validators/project-val');
// const bodyValidation = require('../middlewares/bodyValidation-mdw');
const jwtVerify = require('../middlewares/jwtVerify-mdw');

const categoryRouter = require('express').Router();

categoryRouter.route('/')
.get(categoryController.getAll)

categoryRouter.route('/:id([0-9]+)')
.get(categoryController.getOne)
.delete(jwtVerify(), categoryController.delete)
.put(jwtVerify(), categoryController.update)

categoryRouter.route('/create')
.post(jwtVerify(), categoryController.create);


// to : index (routes)
module.exports = categoryRouter;