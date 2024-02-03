const mongoose = require("mongoose");

mongoose
    .connect(process.env.URI)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
