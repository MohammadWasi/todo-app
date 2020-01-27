const Todo = require('../models/todo.model');


const todo = (req, res) => {
    console.log('works');
    Todo.find({} , (err, list) => {
       if(err) {
           res.send('not found')
       } else {

           res.send(list);
       }
    })
};
module.exports = todo;  