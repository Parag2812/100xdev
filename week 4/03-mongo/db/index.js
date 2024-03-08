const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://*********:********@cluster0.utjbg9s.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourse :[{
        type : mongoose.Schema.Types.ObjectId,
        ref :'Course'  // reference to the Course model
    }]

});

const CourseSchema = new mongoose.Schema({

    titile : String,
    description : String,
    price : Number,
    imageLink : String

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
