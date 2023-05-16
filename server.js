//Importing the required modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

//import config variables
const {port, mongoURI} = require('./config.js');

//Set up the express app and modules
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

//connect to the database
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Import routes
const user = require('./routes/users');

//Set routes
app.use('/api/user', user);

//Listen on the port
app.listen(port, () => console.log(`Express app listening on port ${port}!`));
