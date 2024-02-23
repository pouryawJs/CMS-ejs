const { body } = require("express-validator");

const loginValidator = () => {
    return [
        body("username")
            .trim()
            .isLength({ min: 3, max: 12 })
            .withMessage("یوزر نیم باید بین 3 الی 12 کارکتر باشد")
            .notEmpty()
            .withMessage("یوزرنیم اجباریست"),
        body("password")
            .trim()
            .isLength({ min: 8, max: 36 })
            .withMessage("رمز عبور باید بین 8 تا 36 کارکتر باشد")
            .notEmpty()
            .withMessage("رمز اجباریست"),
    ];
};

module.exports = { loginValidator };
