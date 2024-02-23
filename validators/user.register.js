const { body } = require("express-validator");

const registerValidator = () => {
    return [
        body("username")
            .trim()
            .isLength({ min: 3, max: 12 })
            .withMessage("یوزر نیم باید بین 3 الی 12 کارکتر باشد")
            .notEmpty()
            .withMessage("یوزرنیم اجباریست"),
        body("firstname")
            .trim()
            .isLength({ min: 3, max: 24 })
            .withMessage("نام باید بین 3 تا 24 کارکتر باشد")
            .notEmpty()
            .withMessage("نام اجباریست"),
        body("lastname")
            .trim()
            .isLength({ min: 3, max: 24 })
            .withMessage("نام خانوادگی باید بین 3 تا 24 کارکتر باشد")
            .notEmpty()
            .withMessage("نام خانوادگی اجباریست"),
        body("password")
            .trim()
            .isLength({ min: 8, max: 36 })
            .withMessage("رمز عبور باید بین 8 تا 36 کارکتر باشد")
            .notEmpty()
            .withMessage("رمز اجباریست"),
    ];
};

module.exports = { registerValidator };
