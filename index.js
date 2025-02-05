const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const connection = process.env.MONGO_URI;
const bodyParser = require("body-parser");
const shipment = require("./routes/shipment");


const app = express();

app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(connection)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.use("/shipments", shipment);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



