const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const { default: mongoose } = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



app.get("/todos", async function (req, res) {

    const response = await todo.find({

    })
    res.json({
        response
    })
    //console.log(response);



})
app.post("/todos", async function (req, res) {
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send wrong inputs"
        })
        return;
    }
    //put in mongoDB

    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed : false

    })

    res.json({
        msg: "Todo Created"
    })
})



app.put("/completed", async function (req, res) {

    const updatebody = req.body;
    const parsedPayload = createTodo.safeParse(updatebody);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "you send wrong inputs"
        })
        return;
    }
    //put in mongoDB
try{
    await todo.updateOne({
        _id : mongoose.Types.ObjectId(req.body.id)
    },{
        completed : true
    })

    res.json({
        msg: "marked as completed"
    })
    } catch (error) {
        console.error(error);
        res.status(500).json({
          msg: "Error marking as completed"
        });
      }


})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});