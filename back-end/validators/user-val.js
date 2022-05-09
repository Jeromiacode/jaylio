const yup = require('yup');

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).+$/;
const pwdRegexMsg = "Votre mot-de-passe est trop vulnérable !"

const userValidator = yup.object().shape({
    pseudo: yup.string().trim().required().min(2).max(50),
    email: yup.string().trim().lowercase().email().max(255),
    password: yup.string().required().min(8).max(64).matches(pwdRegex, pwdRegexMsg)
});

// to : user-route (routes)
module.exports = userValidator;