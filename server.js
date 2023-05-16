//Importing the required modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//import config variables
const {port} = require('./config.js');

//Setup the express app and modules
const app = express();
app.use(cors());
app.use(morgan('tiny'));

//Set routes
app.get('/', (req, res) => { res.send('Hello World!') });


//Listen on the port
app.listen(port, () => console.log(`Express app listening on port ${port}!`));
