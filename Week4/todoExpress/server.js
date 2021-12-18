const express = require('express')
const app = express()
const todoRouter = require('./routes/todoRoutes')

const PORT = 3000

app.use(express.json())
app.use('/todo', todoRouter)

app.listen(PORT, () =>{
    console.log()
})