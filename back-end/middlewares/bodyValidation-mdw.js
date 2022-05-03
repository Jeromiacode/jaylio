const bodyValidation = (validatorYup, errorCode = 422) => {
    return (req, res, next) => {
        validatorYup.noUnknown().validate(req.body,  { abortEarly: true })
        .then((data) => {
            req.validatedBody = data;
            next();
        })
        .catch(error => {
            const errors = error.inner.reduce((acc, err) => {
                const { path, msg } = err;

                if (!acc.hasOwnProperty(path)) {
                    acc[path] = [msg]
                }
                acc[path].push(msg)
                return acc
            }, {});
            res.status(errorCode).send(errors)
        });
    };
};

// to : user-route (routes)
module.exports = bodyValidation;