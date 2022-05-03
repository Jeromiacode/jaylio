const jwt = require('jsonwebtoken');

const generateJWT = ({id, pseudo, isAdmin}) => {
    return new Promise((resolve, reject) => {

        const data =  {id, pseudo, isAdmin}
        const secret = process.env.JWT_SECRET;
        const options = {
            algorithm: 'HS256',
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER,
            expiresIn: '12h'
        }
        // génère notre token
        jwt.sign(data, secret, options, (err, token) => {
            if (err) {
                return reject(err)
            }
        // gère le format date
        const expire = new Date(jwt.decode(token).exp * 1000).toISOString();
        // on envoie les deux ~pouf~
        resolve({ token, expire });
        })
    })
};

const decodeJWT = (token) => {

    if (!token) {
        return Promise.reject(new Error('invalid JWT !'))
    }

    return new Promise((resolve, reject) => {

        const secret = process.env.JWT_SECRET;
        const optionsValid = {
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER,
        };
        jwt.verify(token, secret, optionsValid, (err, matchedData) => {

            if (err) {
                return reject(err);
            }

            resolve({
                id: matchedData.id,
                pseudo: matchedData.pseudo,
                isAdmin: matchedData.isAdmin
            });
        });
    })
}

module.exports = {
    // to : user-ctrl (controllers)
    generateJWT,
    // to : jwtVerify-mdw (middlewares)
    decodeJWT
}