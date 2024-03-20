const express = require("express");
const AdminController = require("./admin.conrollers");
const { validationErrors } = require("./../../middlewares/validatorErrors");
const { isAdmin } = require("../../middlewares/isAdmin");
const { adminInfoValidator } = require("../../validators/admin.updateInfo");

const router = express.Router();

router.post(
    "/change-info",
    isAdmin,
    adminInfoValidator(),
    validationErrors,
    AdminController.update
);

module.exports = router;
