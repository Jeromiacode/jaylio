const yup = require('yup');

const loginValidator = yup.object().shape({
    pseudo: yup.string().trim().required(),
    password: yup.string().required(),
}).required();


// to : user-login (pages)
module.exports = loginValidator;