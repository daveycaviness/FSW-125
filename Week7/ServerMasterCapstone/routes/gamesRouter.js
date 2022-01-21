const express = require ("express")
const gamesRouter = express.Router()
const {v4: uuid} = require("uuid")

let games = [
    {
        name: "Forza MotorSport 7 Deluxe Edition",
        developer: "Turn 10 Studios",
        publisher: "Microsoft Studios",
        platform: ["Microsoft Windows", "Xbox One"],
        inStock: true,
        price: 37.78,
        _id: uuid()
    },
    {
        name: "Gran Turismo 7",
        developer: "Polyphony Digital",
        publisher: "Sony Interactive Entertainment",
        platform: ["PlayStation 4", "PlayStation 5"],
        inStock: false,
        price: 69.99,
        _id: uuid()
    },
    {
        name: "Halo Infinite Standard Edition",
        developer: "343 Industries",
        publisher: "Xbox Game Studios",
        platform: ["Microsoft Windows", "Xbox One", "Xbox Series S/X"],
        inStock: true,
        price: 59.99,
        _id: uuid()
    },
    {
        name: "PUBG BattleGrounds",
        developer: "PUBG Corporation",
        publisher: "PUBG Corporation, Microsoft Studios(Xbox One), Tencent Games(mobile)",
        platform: ["Microsoft Windows", "Xbox One", "Android", "iOS", "PlayStation 4", "Stadia"],
        inStock: true,
        price: 29.99,
        _id: uuid()
    },
    {
        name: "UFC 4",
        developer: "EA Originals, EA Vancouver",
        publisher: "EA Originals, EA Sports",
        platform: ["PlayStation 4, Xbox One"],
        inStock: true,
        price: 29.99,
        _id: uuid()
    },
    {
        name: "Call Of Duty - Modern Warfare",
        developer: "Infinity Ward",
        publisher: "Activision",
        platform: ["PlayStation 4, Xbox One, Microsoft Windows"],
        inStock: true,
        price: 40.49,
        _id: uuid()
    },

]

gamesRouter
    .get("/", (req, res) =>{
        res.send(games);
    })

    .get("/:theId", (req, res, next) =>{
        const theId = req.params.theId;
        const filterId = games.filter(e => e._id === theId);
        if(filterId.length === 0){
            const error = new Error("This Game Was Not Found.");
            return next(error);
        }
        res.status(200).send(filterId);
    })

    .get("/search/name", (req, res, next) =>{
        const userQuery = req.query.name;
        const filterId = games.filter(e => e.name.toLowerCase().replace(" ", "").includes(userQuery.toLowerCase().replace(" ", "")));
        if(filterId.length === 0){
            const error = new Error("This Game Was Not Found.");
            return next(error);
        }
        res.status(200).send(filterId);

    })

    .post("/", (req, res) =>{
        const newGame = req.body;
        newGame._id = uuid();
        games.push(newGame);
        res.status(201).send("New Game Has Been Successfully Added...")
    })

    .put("/:theId", (req, res, next) =>{
        const renewId = req.params.theId;
        const renewGame = games.findIndex(e => e._id === renewId);
        if(renewGame === -1){
            const error = new Error("This Game Was Not Found.");
            return next(error);
        }
        Object.assign(games[renewGame], req.body);
        res.status(201).send(`${games[renewGame].name} was Changed Successfully...`);
    })
    
    .delete("/:theId", (req, res, next) =>{
        const deleteGame = req.params.theId;
        const deleteId = games.findIndex(e => e._id === deleteGame);
        if(deleteId === -1){
            const error = new Error("This Game Was Not Found.");
            return next(error);
        }
        games.splice(deleteId, 1);
        res.status(200).send(`${deleteGame} Has Been Deleted Successfully...`);
    })
    
module.exports = gamesRouter