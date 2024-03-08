const { Router } = require("express");
const { User, Course } = require("../db/index")
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;
    // const purchasedCourse = req.body.purchasedCourse;

    await User.create({
        username: username,
        password: password,

    })

    res.json({
        msg: "User account created successfully"
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({})
    console.log(response);
    res.json({
        response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {

    const courseID = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: courseID
        }
    });
    console.log(username + ':- bought the course!'+courseID);
    res.json({
        msg: "purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers.username
    }); 
    console.log(user.purchasedCourse);
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourse
        }
    });
    console.log(courses);

    res.json({
        courses : courses
    })

});

module.exports = router