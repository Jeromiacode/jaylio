const db = require('../DB/models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils/jwt-util');

// from : jwt-util (utils)
const generateToken = (member) => {
    return generateJWT({
        id: member.id,
        pseudo: member.pseudo,
        isAdmin: member.isAdmin
    });
};


const userController = {

    // register: async (req, res) => {

    //     const { pseudo, email } = req.validatedBody;
    //     const hashword = await bcrypt.hash(req.validatedBody.password, 10);
    //     const member = await db.User.create({ pseudo, email, hashword });

    //     const token = await generateToken(member);
    //     res.json(token);
    // },

    login: async (req, res) => {

        const { pseudo, password } = req.validatedBody;
        
        const member = await db.User.findOne({
            where: {
                [Op.or]: [
                    {   
                        pseudo
                    },
                    {   
                        email: { [Op.eq]: pseudo.toLowerCase() }
                    }
                ]
            }
        });

        if (!member) {
            return res.sendStatus(404);
        }
        
        const matchedPassword = await bcrypt.compare(password, member.password);
        if (!matchedPassword) {
            return   res.sendStatus(403);
        }

        const token = await generateToken(member)

        res.send(token);
    }
}

// to : user-route (routes)
module.exports = userController;