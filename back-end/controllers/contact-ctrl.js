const db = require('../DB/models');

const messageController = {

    getOne: async (req, res) => {
        const id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        const message = await db.Message.findByPk(id);

        if (!message) {
            return res.sendStatus(404);
        }

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        res.status(200).json(message);
    },
    getAll: async (req, res) => {
        const { isAdmin } = req.user;
        const messages = await db.Message.findAll()

        if (!messages) {
            return res.sendStatus(404);
        }

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        res.status(200).json(messages);
    },
    create: async (req, res) => {
        const { name, email, title, content, website, company } = req.body;
        const messageCreated = await db.Message.create({ name, email, title, content, website, company });

        res.status(200).json(messageCreated);
    },
    delete: async (req, res) => {
        const id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        const target = await db.Message.findByPk(id);

        if (!target) {
            return res.sendStatus(404);
        }

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        await target.destroy();

        res.sendStatus(200)
    }
};
// to : message-route (routes)
module.exports = messageController;