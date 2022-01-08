const express = require ('express');
const app = express();
const carInventoryRouter = require ('./routes/carInventoryRoute.js');

const PORT = 3000

app.use(express.json());
app.use('/inventory', carInventoryRouter);

app.listen(PORT, () => console.log(`App is running on port: $(PORT)`))