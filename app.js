const express = require('express');
const path = require('path'); //it's a core module so no need to install
const cors = require('cors'); //Cross Origin Resource Sharing, allows to send request from different domain name
const bodyParser = require('body-parser'); //parse incoming request body. like read data from submited form
const mongoose = require('./db/mongoose');
const passport = require('passport');
const config = require('./config/config');

const users = require('./routes/users'); //all requests to localhost/users/xyz will go here

const app = express();
const port = 3000;

app.use(cors());
//Set static folder. to place all the client side files
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//Setup Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//Routes
app.get('/', (req,res) => {
    res.send('invalid response');
});

app.use('/users',users); //requests to /users will go to /routes/users file.


app.listen(port, () => {
    console.log("Server listening on port "+port);
})