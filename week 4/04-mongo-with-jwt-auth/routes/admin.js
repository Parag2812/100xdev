const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    //  console.log(JWT_SECRET);

    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin account created successfully"
    })

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await Admin.findOne({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "incorrect Username or password"
        })
    }



});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;


    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price

    })
    console.log(newCourse);
    res.json({
        msg: "Course  added Successfully",
        courseId: newCourse._id
    })
});


router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    
    
    console.log(req.username);
    const response  = await Course.find({

    })
    console.log(response);
    res.json({
        response
    })
});


module.exports = router;