const Todo = require('../models/todo.model');


const update = (req, res) => {
    console.log('works remove');
    Todo.findByIdAndUpdate(req.params.id,{$set: req.body}, (err) => {
       if(err) {
           res.send('Cannot update')
       } else {

           res.send('updated successfully');
       }
    })
};
module.exports = update;  