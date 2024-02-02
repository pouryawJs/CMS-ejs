const mongoose = require("mongoose");

const adminsSchema = mongoose.Schema(
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
            minLength: 3,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minLength: 8,
            trim: true,
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
