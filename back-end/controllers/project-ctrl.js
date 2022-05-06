const db = require('../DB/models');

const projectController = {

    getOne: async (req, res) => {
        const id = parseInt(req.params.id);

        const project = await db.Project.findByPk(id);

        if (!project) {
            return res.sendStatus(404);
        }

        res.status(200).json(project);
    },
    getAll: async (req, res) => {
        const { rows, count } = await db.Project.findAndCountAll({
            include: [
                {
                    model: db.Category,
                    attributes: ['name']
                }
            ]
        });

        if (count === 0) {
            return res.sendStatus(404);
        }

        res.status(200).json(rows);
    },
    create: async (req, res) => {
        const { isAdmin } = req.user;

        if (!isAdmin) {
            return res.sendStatus(403);
        }
        
        const { name, description, link, categoryId } = req.body;
        const projectCreated = await db.Project.create({ name, description, link, categoryId });

        res.status(200).json(projectCreated);
    },
    addPicture: async (req, res) => {
        const { isAdmin } = req.user;

        if (!isAdmin) {
            return res.sendStatus(403);
        }
        
        if (!req.body) {
            return res.sendStatus(404);
        }

        res.status(200).send();
    },
    update: async (req, res) => {
        const id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        const { name, description, link } = req.body;

        await db.Project.update({ name, description, link}, { where:  { id: id} });
        const projectUpdated = await db.Project.findByPk(id);

        res.status(200).json(projectUpdated);
    },
    delete: async (req, res) => {
        const id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        const project = await db.Project.findByPk(id);

        if (!project) {
            return res.sendStatus(404);
        }

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        await project.destroy();

        res.status(200).json(project);
    }
};
// to : message-route (routes)
module.exports = projectController;