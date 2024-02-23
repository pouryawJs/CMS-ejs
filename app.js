const express = require("express");
const cors = require("cors");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
// routers
const userRouter = require("./modules/Users/user.routes");
//
const app = express();

// default settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// static
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/img", express.static(path.join(__dirname, "public", "img")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// flash
app.use(
    session({
        secret: "random secret key",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(flash());
//

app.use("/users", userRouter);

module.exports = app;
