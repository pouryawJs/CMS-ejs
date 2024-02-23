const mongoose = require("mongoose");

const adminsSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            minLength: 3,
        },

        lastname: {
            type: String,
            required: true,
            minLength: 3,
        },

        username: {
            type: String,
            required: true,
            minLength: 3,
        },

        password: {
            type: String,
            required: true,
            minLength: 8,
        },

        email: {
            type: String,
            required: true,
            minLength: 10,
        },

        created_AT: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

const model = mongoose.model("Admins", adminsSchema);

module.exports = model;
