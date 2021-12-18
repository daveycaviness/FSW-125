const express = require('express');
const app = express();
const intakeRouter = require('./routes/itemsIntake.js');

const PORT = 3000;

app.use(express.json());
app.use('/itemsIntake', intakeRouter);
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`);
});