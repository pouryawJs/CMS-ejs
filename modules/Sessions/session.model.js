const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },

        time: {
            type: String,
            required: true,
        },

        isFree: {
            type: Boolean,
            required: true,
        },

        course: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Courses",
        },

        created_AT: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);

const model = mongoose.model("Sessions", sessionSchema);

module.exports = model;
