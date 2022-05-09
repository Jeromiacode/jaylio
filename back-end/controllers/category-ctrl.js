const db = require('../DB/models');

const categoryController = {

    getOne: async (req, res) => {
        const id = parseInt(req.params.id);

        const category = await db.Category.findByPk(id);

        if (!category) {
            return res.sendStatus(404);
        }

        res.status(200).json(category);
    },
    getAll: async (req, res) => {
        const categories = await db.Category.findAll();

        if (!categories) {
            return res.sendStatus(404);
        }

        res.status(200).json(categories);
    },
    create: async (req, res) => {
        const { isAdmin } = req.user;
    
        if (!isAdmin) {
            return res.sendStatus(403);
        }
        
        const { name } = req.body;
        const categoryCreated = await db.Category.create({ name });
    
        res.status(200).json(categoryCreated);
    },
    update: async (req, res) => {
        const id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        const { name } = req.body;

        await db.Category.update({ name }, { where:  { id: id} });
        const categoryUpdated = await db.Category.findByPk(id);

        res.status(200).json(categoryUpdated);
    },
    delete: async (req, res) => {
        const id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        const category = await db.Category.findByPk(id);

        if (!category) {
            return res.sendStatus(404);
        }

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        await category.destroy();

        res.status(200).json(category);
    }
};
// to : message-route (routes)
module.exports = categoryController;