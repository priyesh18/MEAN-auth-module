var mongoose = require('mongoose');
var config = require('./../config/database');
//initially promises were developed by third party like bluebird but it became too famous and got add to js
//telling mongoose to use promise
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('connected to database');
})

mongoose.connection.on('error', (err) => {
    console.log('error'+err);
})

module.exports = {
    mongoose: mongoose
}