const AdminModel = require("./admin.model");

exports.update = (req, res) => {
    try {
        if (req.err) {
            req.flash("msgs", req.err);
            return res.redirect("../users/info");
        }
    } catch (error) {
        console.log(error);
    }
};
