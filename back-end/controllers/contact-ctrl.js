const db = require('../DB/models');

const messageController = {

    addMessage: async (req, res) => {
        const { name, email, title, content, website, company } = req.body;
        await db.Message.create({ name, email, title, content, website, company });
        const messages = await db.Message.findAll()

        res.status(200).json(messages);
    },
    deleteMessage: async (req, res) => {
        const message_id = parseInt(req.params.id);
        const { isAdmin } = req.user;

        const target = await db.Message.findByPk(message_id);

        if (!target) {
            return res.sendStatus(404);
        }

        if (!isAdmin) {
            return res.sendStatus(403);
        }

        await target.destroy();
        const messages = await db.Message.findAll()

        res.status(200).json(messages);
    }
};
// to : message-route (routes)
module.exports = messageController;