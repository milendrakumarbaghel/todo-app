const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const { createTodo } = require('./types');
const PORT = process.env.PORT;
const { todo } = require('./db');



app.listen(PORT, () => {
  console.log('Server is running on port 3030');
});

app.post('/todo', async function(req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
    await todo.create({
       title: createPayload.title,
       description: createPayload.description,
       completed: false
    })
    res.json({
        msg: "Todo created successfully",
    })
})

app.get('/todos', async function(req, res) {
    const todos =  await todo.find({});
    // console.log(todos); // this will be a promise
    res.json({
        todos
    })
})

app.put('/completed', async function(req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json( {
        msg: "Todo marked as completed"
    })
})

// write basic express boilerplate code
// with express.json() middleware
