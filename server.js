const app = require("./app");
require("dotenv").config();
require("./configs/db");

app.listen(process.env.PORT, () => {
    console.log(`connected to port ${process.env.PORT}`);
});
