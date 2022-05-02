const { decodeJWT } = require('../utils/jwt-utl');
const db = require('../models');
const { Op } = require('sequelize');

const jwtVerify = (options = {adminRight: false}) => {
    return async (req, res, next) => {
        const userHeader = req.headers['authorization'];
        const token = userHeader && userHeader.split(' ')[1];

        if (!token) {
            return res.sendStatus(401);
        }

        // Vérification si Admin
        let jwtTokenData;
        try {
            jwtTokenData = await decodeJWT(token)
        } catch (error) {
            return res.status(403).send(error);
        }
        
        if (options.adminRight) {
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
        req.user = jwtTokenData;
        
        next();
    };
};

// to : user-rte
module.exports = jwtVerify;