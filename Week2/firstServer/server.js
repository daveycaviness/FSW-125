const express = require('express');
const app = express();

const PORT = 3000

const endPoints = {
    superFastCars: [
        {
            car: "2018 audi s4",
            horsepower: "340",
            torque: "323"
        },
        {
            car: "2020 audi s6",
            horsepower: "440",
            torque: "386" 
        },
        {
            car: "2020 audi rs7",
            horsepower: "644",
            torque: "579"
        }
    ],

    goodMovies: [
        {
            movie: "Fast and Furious",
            starActor: "Paul Walker, Van Diesel"
        },
        {
            movie: "Gone in 60 Seconds",
            starActor: "Nicholas Cage"
        },
        {
            movie:"Need For Speed",
            starActor: "Aarron Paul"
        }
    ],

    countryAndCapital: [
        {
            country: "Japan",
            capital: "Tokyo"
        },
        {
            country: "Turkey",
            capital: "Ankara"
        },
        {
            country: "Germany",
            capital: "Berlin"
        }
    ]
}

app.get('/endPoints', (req, res) =>{
    res.send(endPoints)
})

app.get('/endPoints/superfastcars', (req, res) =>{
    res.send(endPoints.superFastCars)
})
app.get('/endPoints/countryAndCapital', (req, res) =>{
    res.send(endPoints.countryAndCapital)
})
app.get('/endPoints/goodMovies', (req, res) =>{
    res.send(endPoints.goodMovies)
})

app.listen(PORT, () => {
    console.log("This is my first server-3000.")
})


