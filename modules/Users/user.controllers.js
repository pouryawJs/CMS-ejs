const UserModel = require("./user.model");
const AdminModel = require("./../Admins/admin.model");
const CoursesModel = require("./../Courses/course.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { isValidObjectId } = require("mongoose");

exports.registerPage = (req, res) => {
    const msgs = req.flash("msgs");
    res.render("register", {
        msgs,
    });
};
exports.create = async (req, res) => {
    try {
        if (req.err) {
            req.flash("msgs", req.err);
            return res.redirect("register");
        }
        const { username, firstname, lastname, password } = req.body;
        // hashing password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // create user
        const date = new Date();

        const configs = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const newUser = {
            username,
            firstname,
            lastname,
            password: hashedPassword,
            created_AT: date.toLocaleDateString("fa-IR", configs),
        };

        // create Admin if there is no user
        const usersCount = await UserModel.find({}).count();
        const adminsCount = await AdminModel.find({}).count();

        if (usersCount === 0 && adminsCount === 0) {
            await AdminModel.create({
                ...newUser,
                email: "test-admins-email@gmail.com",
            });
            // jwt token
            const token = jwt.sign({ username }, process.env.SECRET_KEY, {
                expiresIn: "30 day",
            });
            res.cookie("token", token);
            return res.redirect("panel-change-info");
        }
        //
        const user = await UserModel.create(newUser);

        if (!user) {
            req.flash("msg", "something went wrong");
            return res.redirect("register");
        }

        return res.redirect("register");
    } catch (error) {
        req.flash("msg", "Something went wrong");
        return res.redirect("register");
    }
};
exports.loginPage = (req, res) => {
    try {
        const { token } = req.cookies;
        // token validation
        jwt.verify(token, process.env.SECRET_KEY);
        return res.redirect("info");
    } catch (error) {
        const msgs = req.flash("msgs");
        return res.render("login", {
            msgs,
        });
    }
};
exports.login = async (req, res) => {
    try {
        // check error
        if (req.err) {
            req.flash("msgs", req.err);
            return res.redirect("login");
        }
        // data
        const { username, password } = req.body;

        // check user data
        const user = await AdminModel.findOne({ username });

        if (!user) {
            req.flash("msgs", { path: "username", msg: "invalid username" });
            return res.redirect("login");
        }

        // check password
        if (!bcrypt.compareSync(password, user.password)) {
            req.flash("msgs", { path: "password", msg: "invalid password" });
            return res.redirect("login");
        }
        // jwt token
        const token = jwt.sign({ username }, process.env.SECRET_KEY, {
            expiresIn: "30 day",
        });

        res.cookie("token", token, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
        });
        return res.redirect("info");
    } catch (error) {
        req.flash("msg", "Something went wrong");
        return res.render("login");
    }
};
exports.infoPanel = async (req, res) => {
    try {
        const admin = req.admin;
        // courses count (for information table)
        const courses = await CoursesModel.find({ creator: admin._id }).count();
        // flash msgs that comes from /admins/change-info api
        const msgs = req.flash("msgs");
        return res.render("panel-change-info", {
            user: admin,
            courses,
            msgs,
        });
    } catch (error) {
        return res.redirect("login");
    }
};
exports.usersPanel = async (req, res) => {
    try {
        const admin = req.admin;
        // get all users
        const users = await UserModel.find({}).lean();
        // courses count (for information table)
        const courses = await CoursesModel.find({ creator: admin._id }).count();
        //
        return res.render("panel-users", {
            user: admin,
            users,
            courses,
        });
    } catch (error) {}
};
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) {
            res.flash("msg", "invalid id");
            return res.status(401).redirect("/all-users");
        }

        // remove user
        const deletedUser = await UserModel.findOneAndDelete({ _id: id });

        if (!deletedUser) {
            req.flash("msg", "user not found");
            return res.status(404).redirect("/all-users");
        }

        return res.redirect("/all-users");
    } catch (error) {
        req.flash("msg", "server error");
        return res.status(500).redirect("/all-users");
    }
};
