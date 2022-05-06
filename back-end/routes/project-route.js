const projectController = require('../controllers/project-ctrl');
// const { projectValidator } = require('../validators/project-val');
// const bodyValidation = require('../middlewares/bodyValidation-mdw');
const jwtVerify = require('../middlewares/jwtVerify-mdw');

const projectRouter = require('express').Router();

projectRouter.route('/')
.get(projectController.getAll)

projectRouter.route('/:id([0-9]+)')
.get(projectController.getOne)
.delete(jwtVerify(), projectController.delete)
.put(jwtVerify(), projectController.update)

projectRouter.route('/create')
.post(jwtVerify(), projectController.create);

// to : index (routes)
module.exports = projectRouter;