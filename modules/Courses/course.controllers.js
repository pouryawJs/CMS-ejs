const CourseModel = require("./course.model");

exports.coursesPanel = async (req, res) => {
    const admin = req.admin;
    const adminCoursesCount = await CourseModel.find({
        creator: admin._id,
    }).count();
    const courses = await CourseModel.find({}).lean();
    const msg = req.flash("msg");
    res.render("panel-courses", {
        msg,
        courses,
        adminCoursesCount,
        user: admin,
    });
};
exports.addCourse = async (req, res) => {
    const { title, price, category, time } = req.body;
    const admin = req.admin;
    // checking error
    if (req.err) {
        console.log(req.err);
        req.flash("msg", "invalid data");
        return res.redirect("/courses");
    }
    // create course
    const date = new Date();

    const configs = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const course = await CourseModel.create({
        title,
        price,
        category,
        time,
        body: "Test",
        students: 0,
        cover: "course.png",
        creator: admin._id,
        created_AT: date.toLocaleDateString("fa-IR", configs),
    });

    if (!course) {
        req.flash("msg", { path: "server", msg: "something went wrong" });
        return res.redirect("/courses");
    }
    return res.redirect("/courses");
};
