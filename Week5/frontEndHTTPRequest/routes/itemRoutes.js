const express = require('express');
const itemRouter = express.Router();
const {v4: uuid} = require('uuid');

let items = [
    {
        item: "old brass plumbing hardware",
        desc: "brass fittings removed from old plumbing from previous jobs",
        ppu: 1.79,
        _id: uuid()
    },
    {
        item: "aluminum cans",
        desc: "old beverage cans",
        ppu: 1.15,
        _id: uuid()
    },
    {
        item: "copper wires",
        desc: "old wiring from previous electrical jobs",
        ppu: 1.59,
        _id: uuid()
    }
]

itemRouter
    .get('/', (req, res) =>{
        res.send(items);
    })
    .get('/:theId', (req, res) =>{
        const theId = req.params.theId
        const filterID = items.filter(e => e._id === theId)
        res.send(filterID)
    })
    .post('/', (req, res) =>{
        const newInput = req.body
        newInput._id = uuid()
        items.push(newInput)
        res.send(newInput)
    })
    .put('/:theId', (req,res) =>{
        const renewId = req.params.theId
        const renewItems = items.findIndex(e => e._id === renewId)
        Object.assign(items[renewItems], req.body)
        res.send(`${items[renewItems].name} was changed successfully...`)
    })
    .delete('/:theId', (req, res) =>{
        const deleteId = req.params.theId
        const justDelete = items.findIndex(e => e._id === deleteId)
        items.splice(justDelete, 1)
        res.send(`${deleteId} has been deleted successfully...`)
    })

module.exports = itemRouter;