const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },

        lastname: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },

        created_AT: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

const model = mongoose.model("users", usersSchema);

module.exports = model;
