const db = require('../DB/models');
const fs = require('fs');

const projectController = {
    getPicture: async (req, res) => {

        res.status(200)
    },
    create: async (req, res) => {
        const { name, description } = req.body;
        const { filename } = req.file;
        // const { isAdmin } = req.user;
    
        // if (!isAdmin) {
        //     return res.sendStatus(403);
        // }

        const projectCreated = await db.Project.create({ name, description, fileName: filename});
        console.log(req.file);

        res.status(200).send(projectCreated);
    },
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