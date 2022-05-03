const { decodeJWT } = require('../utils/jwt-util');
const db = require('../DB/models');
const { Op } = require('sequelize');

const jwtVerify = (options = { isAdmin: false }) => {

    return async (req, res, next) => {

        const userHeader = req.headers['authorization'];
        const token = userHeader && userHeader.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);
        }

        let jwtTokenData;

        try {
            jwtTokenData = await decodeJWT(token)
        } catch (error) {
            return res.status(403).send(error);
        }
        
        if (options.isAdmin) {
            const admin = await db.User.findOne({
                where: {
                    [Op.and]: [
                        { id: jwtTokenData.id },
                        { isAdmin: true }
                    ]
                }  
            })

            if (!admin) {
                return res.sendStatus(403)
            }
        }

        // on place les données de l'utilisateur dans la request
        req.user = jwtTokenData;
    
        next();
    };
};

// to : user-route (routes)
module.exports = jwtVerify;