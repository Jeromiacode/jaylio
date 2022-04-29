const bodyValidation = (yupValidator, errorCode = 422) => {
    return (req, res, next) => {
        yupValidator.noUnknown().validate(req.body,  {abortEarly: true})
        .then((data) => {
            req.validData = data;
            next();
        })
        .catch(yupError => {
            const errors = yupError.inner.reduce((acc, err) => {
                const {path, msg} = err;
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

// to : user-route
module.exports = bodyValidation;