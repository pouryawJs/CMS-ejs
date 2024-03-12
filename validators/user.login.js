const { body } = require("express-validator");

const loginValidator = () => {
    return [
        body("username")
            .trim()
            .isLength({ min: 3, max: 12 })
            .withMessage("username must be 3-12 character")
            .notEmpty()
            .withMessage("username is require"),
        body("password")
            .trim()
            .isLength({ min: 8, max: 36 })
            .withMessage("password must be 8-36 character")
            .notEmpty()
            .withMessage("password is require"),
    ];
};

module.exports = { loginValidator };
