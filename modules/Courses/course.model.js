const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 3,
            trim: true,
        },

        body: {
            type: String,
            required: true,
            trim: true,
        },

        time: {
            type: String,
            required: true,
        },

        price: {
            type: String,
            required: true,
        },

        students: {
            type: Number,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },

        cover: {
            type: String,
            required: true,
        },

        creator: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "Admins",
        },

        created_AT: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);
courseSchema.virtual("sessions", {
    ref: "Sessions",
    localField: "_id",
    foreignField: "course",
});
const model = mongoose.model("Courses", courseSchema);

module.exports = model;
