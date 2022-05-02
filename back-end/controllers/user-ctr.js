const db = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils/jwt-utl');


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

        // // from : jwt-utl
        // const token = await generateJWT({
        //     id: user.id,
        //     pseudo: user.pseudo,
        //     isAdmin: user.isAdmin

        res.sendStatus(200);
    }
}

// to : user-rte
module.exports = userController;