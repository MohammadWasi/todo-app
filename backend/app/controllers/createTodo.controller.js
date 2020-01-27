const Todo = require('../models/todo.model');


const create = (req, res) => {
    const {title} = req.body;
    const todo = new Todo({
        title: title,
        completed: false
    });
    todo.save((err) => {
        if(err) {
        return next(err);
        }
        res.send('Todo created successfully');
    });
};
module.exports = create;