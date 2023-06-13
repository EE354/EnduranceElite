//Importing the required modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const routes = require('./routes/routes');

//import config variables
const {port, mongoURI} = require('./config.js');

//Set up the express app, modules and routes
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));
routes.setRoutes(app);

//connect to the database
(async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true,});
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
})();

//Listen on the port
app.listen(port, () => console.log(`Express app listening on port ${port}!`));