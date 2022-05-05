const yup = require('yup');

// to : contact-form (pages)
export const contactValidator = yup.object().shape({
    name: yup.string().trim().min(2).max(50).required(),
    email: yup.string().trim().email().required(),
}).required();

