const { body } = require("express-validator");

const addCourseValidator = () => {
    return [
        body("title")
            .trim()
            .isLength({ min: 3, max: 36 })
            .withMessage("title must be 3-36 character")
            .notEmpty()
            .withMessage("title is require"),
        body("price")
            .trim()
            .isNumeric()
            .withMessage("invalid price")
            .notEmpty()
            .withMessage("price is require"),
        body("category")
            .trim()
            .isLength({ min: 3, max: 36 })
            .withMessage("category must be 3-24 character")
            .notEmpty()
            .withMessage("category is require"),
        body("time")
            .trim()
            .isLength({ min: 2, max: 10 })
            .withMessage("invalid Time")
            .notEmpty()
            .withMessage("Time is require"),
    ];
};

module.exports = { addCourseValidator };
