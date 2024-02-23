const { validationResult } = require("express-validator");

const validationErrors = (req, res, next) => {
    const result = validationResult(req);
    let errors = [];

    if (!result.isEmpty()) {
        result.errors.forEach((error) => {
            errors.push({ path: error.path, msg: error.msg });
        });
    }

    if (errors.length !== 0) {
        req.err = errors;
    }

    next();
};

module.exports = { validationErrors };
