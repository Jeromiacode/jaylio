const yup = require('yup');

const messageValidator = yup.object().shape({
    name: yup.string().required().trim().min(2).max(50),
    email: yup.string().required().trim().lowercase().email().max(255),
    content: yup.string().required().min(4).max(1000),
    title: yup.string().trim().max(50),
    website: yup.string().trim().lowercase().max(255),
    company: yup.string().trim().max(50),
});

// to : contact-route (routes)
module.exports =  messageValidator
