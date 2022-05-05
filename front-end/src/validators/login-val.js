const yup = require('yup');

// to : admin-login (pages)
export const loginValidator = yup.object().shape({
    pseudo: yup.string().trim().required(),
    password: yup.string().required(),
}).required();

