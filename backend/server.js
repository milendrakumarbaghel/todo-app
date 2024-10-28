const express = require('express');
const app = express();
const { createTodo } = require('./types');


app.use(express.json());
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    // put it in mongodb
})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
})

// write basic express boilerplate code
// with express.json() middleware
