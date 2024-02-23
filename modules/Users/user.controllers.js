const UserModel = require("./user.model");
const AdminModel = require("./../Admins/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

        if (usersCount === 0) {
            await AdminModel.create({
                ...newUser,
                email: "test-admins-email@gmail.com",
            });
            return res.redirect("panel-change-info");
        }
        //
        const user = await UserModel.create(newUser);

        if (!user) {
            req.flash("msg", "something went wrong");
            return res.redirect("register");
        }

        // jwt token
        const token = jwt.sign(
            { username, firstname },
            process.env.SECRET_KEY,
            {
                expiresIn: "30 day",
            }
        );

        return res.redirect("register");
    } catch (error) {
        req.flash("msg", "Something went wrong");
        return res.redirect("register");
    }
};
exports.loginPage = (req, res) => {
    const msgs = req.flash("msgs");
    res.render("register", {
        msgs,
    });
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
            req.flash("msgs", "invalid Data");
            return res.redirect("login");
        }

        // check password
        if (bcrypt.compareSync(password, user.password)) {
            console.log("passed");
            // req.flash("msgs", "invalid Data");
            // return res.redirect("login");
        }

        res.redirect("/login");
    } catch (error) {}
};
