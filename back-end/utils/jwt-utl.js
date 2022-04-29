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
        
        jwt.sign(data, secret, options, (err, token) => {
            if (err) {
                return reject(err)
            }
        
        const expire = new Date(jwt.decode(token).exp * 1000).toISOString();
        resolve({token, expire});
        
        })
    })
};

const decodeJWT = (token) => {
    if (!token) {
        return Promise.reject(new Error('JWT invalide !'))
    }

    return new Promise((resolve, reject) => {
        const secret = process.env.JWT_SECRET;
        const optionsValid = {
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER,
        };
        console.log("secret", secret);
        jwt.verify(token, secret, optionsValid, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve({
                // id: data.id,
                pseudo: data.pseudo,
                isAdmin: data.isAdmin
            });
        });
    })
}

module.exports = {
    // to : user-ctr
    generateJWT,
    // to : jwtVerify-mdw
    decodeJWT
}