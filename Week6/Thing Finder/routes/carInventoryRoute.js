const express = require ('express');
const carInventoryRouter = express.Router();
const {v4: uuid} = require('uuid');

let inventory = [
    {
        year: 2017,
        make:"Mercedes",
        model: "AMG C Class",
        trim: "Premiumnod",
        price: 48000.00,
        _id: uuid()
    },
    {
        year: 2018,
        make: "Mercedes",
        model:"SLC300",
        trim: "Prestige",
        price: 44500.00,
        _id: uuid()
    },
    {
        year: 2016,
        make: "Audi",
        model:"A7",
        trim: "Premium Plus",
        price: 40998.00,
        _id: uuid()
    },
    {
        year: 2018,
        make: "Audi",
        model:"R8",
        trim: "Quattro Plus",
        price: 168995.00,
        _id: uuid()   
    },
    {
        year: 2020,
        make: "BMW",
        model:"430 i",
        trim: "xDrive",
        price: 43990.00,
        _id: uuid()
    },
    {
        year: 2017,
        make: "BMW",
        model:"X3",
        trim: "sDrive28i",
        price: 26377.00,
        _id: uuid()
    },
    {
        year: 2014,
        make: "Aston Martin",
        model:"Vanquish",
        trim: "Base",
        price: 128995.00,
        _id: uuid()
    },
    {
        year: 2020,
        make: "Aston Martin",
        model:"Vantage",
        trim: "Base",
        price: 148700.00,
        _id: uuid()
    },
    {
        year: 2021,
        make: "Alfa Romeo",
        model:"Giulia Ti",
        trim: "Sport",
        price: 45681.00,
        _id: uuid()
    },
    {
        year: 2018,
        make: "Alfa Romeo",
        model:"Giulia",
        trim: "Quadrifoglio",
        price: 58995.00,
        _id: uuid()
    },
    {
        year: 2020,
        make: "Maserati",
        model:"Levante S",
        trim: "GrandSport",
        price: 76495.00,
        _id: uuid()
    },
    {
        year: 2021,
        make: "Maserati",
        model:"Ghibli S",
        trim: "Q4 GrandSport",
        price: 76495.00,
        _id: uuid()
    },
    {
        year: 2021,
        make: "Maserati",
        model:"Ghibli S",
        trim: "Q4 GrandSport",
        price: 84950.00,
        _id: uuid()
    },
    {
        year: 2016,
        make: "Porsche",
        model:"Cayman",
        trim: "GTS",
        price: 70590.00,
        _id: uuid()
    },
    {
        year: 2017,
        make: "Porsche",
        model:"718 Boxster",
        trim: "S",
        price: 77950.00,
        _id: uuid()
    }
]

carInventoryRouter
    .get ('/', (req, res) => {
        res.send(inventory);
    })

    .get('/:inventoryID', (req, res) => {
        const itemID = req.params.inventoryID;
        const foundCar = inventory.filter(e => e._id == itemID);
        res.send(foundCar);
    })

    .get('/search/year', (req, res) => {
        const userQuery = req.query.year;
        const filtered = inventory.filter(e =>e.year == userQuery);
        res.send(filtered);
    })

    .get('/search/make', (req, res) => {
        const userQuery = req.query.make;
        const filtered = inventory.filter(e =>e.make.toLowerCase() == userQuery.toLowerCase());
        res.send(filtered);
    })



    .post('/', (req, res) => {
        const newCar = req.body;
        newCar._id = uuid();
        inventory.push(newCar);
        res.send(`${newCar.year} ${newCar.make} ${newCar.model} has been added successfully`);
    })

    .put('/:inventoryID', (req, res) => {
        const itemID = req.params.inventoryID;
        const carIndex = inventory.findIndex(e => e._id == itemID);
        Object.assign (inventory[carIndex], req.body);
        res.send(`${inventory[carIndex].year} ${inventory[carIndex].make} ${inventory[carIndex].model} has been updated successfully`)
    })

    .delete('/:inventoryID', (req, res)=> {
        const itemID = req.params.inventoryID;
        const carIndex = inventory.findIndex(e => e._id == itemID);
        inventory.splice(carIndex, 1);
        res.send(`The car${itemID} has been removed successfully`);
    })

module.exports = carInventoryRouter