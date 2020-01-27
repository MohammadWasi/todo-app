const Todo = require('../models/todo.model');


const remove = (req, res) => {
    console.log('remove');
    Todo.findByIdAndDelete(req.params.id, (err) => {
       if(err) {
           res.send('Cannot delete')
       } else {

           res.send('deleted successfully');
       }
    })
};
module.exports = remove;  