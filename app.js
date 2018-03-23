const express = require('express');
const path = require('path'); //it's a core module so no need to install
const cors = require('cors'); //Cross Origin Resource Sharing
const bodyParser = require('body-parser'); //parse incoming request body. like read data from submited form
const passport = require('passport-jwt');
const mongoose = require('./db/mongoose');
const config = require('./config/database');
const users = require('./routes/users'); //all requests to localhost/users/xyz will go here

//telling mongoose to use promise
// mongoose.Promise = global.Promise;
// mongoose.connect(config.database);
// mongoose.connection.on('connected', () => {
//     console.log('connected to database');
// })

// mongoose.connection.on('error', (err) => {
//     console.log('error'+err);
// })

const app = express();
const port = 3000;

//allows to send request from different domain name
app.use(cors());
//Set static folder. to place all the client side files
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//Routes
app.get('/', (req,res) => {
    res.send('invalid response');
});

app.use('/users',users); //requests to /users will go to /routes/users file.


app.listen(port, () => {
    console.log("Server listening on port "+port);
})