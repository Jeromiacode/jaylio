const db = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt')

const userController = {

    login: async (req, res) => {

        const { pseudo, email, password, isAdmin } = req.body;
        
        //     const admin = await db.User.create({ pseudo, email, password, isAdmin });
        //     res.send(admin)
        // }
        
        const user = await db.User.findOne({
            where: {
                [Op.or]: [
                    {   
                        pseudo: pseudo
                    },
                    {   
                        email: { [Op.eq]: pseudo.toLowerCase() }
                    }
                ]
            }
        });

        if (!user) {
            return res.sendStatus(404);
        }
        
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return   res.send("Mais ... attends un peu, tu n'es pas Admin? :o wow");
        }

        res.status(200).send("Velkom Jaaaa !");
    }

}

// to : userRoute
module.exports = userController;