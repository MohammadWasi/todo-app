const express  = require('express');
const router = express.Router();

const todo = require('../controllers/todo.controller')
const create = require('../controllers/createTodo.controller');
const remove = require('../controllers/remove.controller');
const update = require('../controllers/update.controller');



router.get('/', todo);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;


