const { body } = require("express-validator");

const adminInfoValidator = () => {
    return [
        body("username")
            .trim()
            .isLength({ min: 3, max: 12 })
            .withMessage("username must be 3-12 character")
            .notEmpty()
            .withMessage("username is require"),
        body("firstname")
            .trim()
            .isLength({ min: 3, max: 24 })
            .withMessage("firstname must be 3-24 character")
            .notEmpty()
            .withMessage("firstname is require"),
        body("lastname")
            .trim()
            .isLength({ min: 3, max: 24 })
            .withMessage("lastname must be 3-24 character")
            .notEmpty()
            .withMessage("lastname is require"),
        body("password")
            .trim()
            .isLength({ min: 8, max: 36 })
            .withMessage("password must be 8-36 character")
            .notEmpty()
            .withMessage("password is require"),
        body("email")
            .trim()
            .notEmpty()
            .withMessage("email required")
            .isEmail()
            .withMessage("Invalid email"),
    ];
};

module.exports = { adminInfoValidator };
