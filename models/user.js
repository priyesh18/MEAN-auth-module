const mongoose = require('mongoose');
const validator = require('validator');
//telling mongoose to use promise
//mongoose.Promise = global.Promise;
//User Schema
// var UserSchema = new mongoose.Schema({
//     name: {
//         type: String
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
//module.exports allows you to call the function from other file.
        //To use User var from outside
module.exports = mongoose.model('User',{
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength:1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
}); 

// module.exports.getUserById = (id, callback) => {
//     User.findById(id,callback);
// }
// module.exports.getUserByUsername = (username, callback) => {
//     const query = { username: username}
//     User.findOne(query,callback);
// }
// module.exports.AddUser = (newUser, callback) => {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if(err) throw err;
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }


