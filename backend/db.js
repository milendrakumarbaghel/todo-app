const mongoose = require('mongoose');
mongoose.connect(MONGODB_CONNECTIONSTRING);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
