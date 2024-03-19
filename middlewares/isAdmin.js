const AdminModel = require("../modules/Admins/admin.model");
const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        // token validation
        const payloadData = jwt.verify(token, process.env.SECRET_KEY);
        // find user data
        let admin = await AdminModel.findOne({
            username: payloadData.username,
        }).select("-password");

        if (admin) {
            req.admin = admin;
            return next();
        }
        return res.render("login");
    } catch (error) {
        return res.redirect("login");
    }
};

module.exports = { isAdmin };
