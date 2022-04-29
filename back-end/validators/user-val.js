const yup = require('yup');

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).+$/;
const pwdRegexMsg = "Votre mot-de-passe est trop vulnérable !"

const loginValidator = yup.object.shape({
    pseudo: yup.string().trim().required().min(2).max(50),
    email: yup.trim().lowercase().required().email().max(50),
    password: yup.required().min(8).max(64).matches(pwdRegex, pwdRegexMsg),
});

// to : user-route (by bodyValidation())
module.exports = loginValidator;