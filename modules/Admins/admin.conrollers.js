const AdminModel = require("./admin.model");

exports.update = async (req, res) => {
    try {
        const admin = req.admin;
        if (req.err) {
            req.flash("msgs", req.err);
            return res.redirect("../users/info");
        }
        const updatedAdmin = await AdminModel.findOneAndUpdate(
            {
                username: admin.username,
            },
            {
                $set: req.body,
            }
        );

        if (!updatedAdmin) {
            req.flash("msg", "something went wrong");
            return res.redirect("../users/info");
        }

        return res.redirect("../users/info");
    } catch (error) {
        console.log(error);
    }
};
