const express = require("express")


const { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } =require('../controllers/todoController');

const route = express.Router();


route.post('/', addTodo)
route.get('', getAllTodos);
route.get('/:id', toggleTodoDone);
route.put('/:id', updateTodo);
route.delete('/:id', deleteTodo);


module.exports = route;