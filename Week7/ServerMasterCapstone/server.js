const express =  require("express")
const app = express()
const gamesRouter = require("./routes/gamesRouter.js")

const PORT = 9000

app.use(express.json())
app.use("/games", gamesRouter)
app.use((err, req, res, next) =>{
    console.log(err)
    return res.status(500).send({errMsg: err.message})
})
app.listen(PORT, () => {
    console.log("app running on PORT 9000")
})