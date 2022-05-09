const multer = require('multer');
const projectController = require('../controllers/project-ctrl');
// const { projectValidator } = require('../validators/project-val');
// const bodyValidation = require('../middlewares/bodyValidation-mdw');
const jwtVerify = require('../middlewares/jwtVerify-mdw');

// Sauvegarde de nos images avec Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage')
    },
    filename: function (req, file, cb) {
      const extArray = file.mimetype.split("/");
      const extension = extArray[extArray.length - 1];
      const fileName = file.originalname.split('.')
      const imageName = fileName[0].replace(' ', '-').toLowerCase()
      cb(null, imageName + '.' + extension)
    }
  })
const upload = multer({ storage: storage })

const projectRouter = require('express').Router();

projectRouter.route('/')
.get(projectController.getAll)

projectRouter.route('/test')
.get(projectController.getPicture)

projectRouter.route('/:id([0-9]+)')
.get(projectController.getOne)
.delete(jwtVerify(), projectController.delete)
.put(jwtVerify(), projectController.update)

projectRouter.route('/create')
.post(/*jwtVerify(),*/ upload.single('file'), projectController.create);

// to : index (routes)
module.exports = projectRouter;