const mongoose = require("mongoose");

const usersSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },

        lastName: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },

        userName: {
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
