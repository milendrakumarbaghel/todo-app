const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://milendrakumarbaghel:CR0L3S0zDYMojbar@cluster0.fqqcbti.mongodb.net/todo');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports = {
    todo
}
