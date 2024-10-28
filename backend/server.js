const express = require('express');
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/todo', (req, res) => {

})

app.get('/todos', (req, res) => {

})

app.put('/completed', (req, res) => {

})

// write basic express boilerplate code
// with express.json() middleware
