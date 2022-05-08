const fs = require('fs');

const getImage = () => {
    return (req, res, next) => {
        const {name} = req.body
        fs.readFile(`./storage/${name}.png`, (err, data) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(data)
            next();
        })
    }
}

// to : 
module.exports = getImage;