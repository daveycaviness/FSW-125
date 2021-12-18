const express = require('express');
const todoRouter = express.Router();
const {v4: uuid} = require('uuid');

let todos = [
    {
        name: "wash my audi S4",
        desc: "clean the engine bay",
        isComplete: false,
        _id: uuid()
    },
    {
        name: "take Egypt my dog for a walk",
        desc: "Im gonna take her to the dog park today",
        isComplete: false,
        _id: uuid()
    },
    {
        name: "school work",
        desc: "finish my school assignments",
        isComplete: true,
        _id: uuid()
    }
]

todoRouter
    .get('/', (req, res) =>{
        res.send(todos);
    })
    .get('/:theId', (req, res) =>{
        const theId = req.params.theId
        const filterID = todos.filter(e => e._id === theId)
        res.send(filterID)
    })
    .post('/', (req, res) =>{
        const newInput = req.body
        newInput._id = uuid()
        todos.push(newInput)
        res.send(newInput)
    })
    .put('/:theId', (req,res) =>{
        const renewId = req.params.theId
        const renewTodos = todos.findIndex(e => e._id === renewId)
        Object.assign(todos[renewTodos], req.body)
        res.send(`${todos[renewTodos].name} was changed successfully...`)
    })
    .delete('/:theId', (req, res) =>{
        const deleteId = req.params.theId
        const justDelete = todos.findIndex(e => e._id === deleteId)
        todos.splice(todos[justDelete], 1)
        res.send(`${deleteId} has been deleted successfully...`)
    })

module.exports = todoRouter;