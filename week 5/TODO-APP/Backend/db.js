const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://********:********
@cluster0.utjbg9s.mongodb.net/TodoApp");


const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})


const todo = mongoose.model('todoApp ', TodoSchema);


module.exports = {
    todo
}
