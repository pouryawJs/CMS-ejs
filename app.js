const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// default settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//

module.exports = app;
