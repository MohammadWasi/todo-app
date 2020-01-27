const express = require('express');
const bodyParser = require('body-parser');
const todo = require('./app/routes/todo.route');
const initDb = require('./app/db/db')
const app = express();

initDb().then(() => {
    console.log('db created')
}).catch(err => {
    console.log(err)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended: false})))

app.use('/todo', todo);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port${port}`)
})