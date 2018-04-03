const express = require('express');
const _ = require('lodash');
const router = express.Router();
const passport = require('passport-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

router.post('/register',(req,res,next) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User (body);
    user.save().then((user) => {
        res.send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    // bcrypt.genSalt()
    // .then((salt) => {
    //     //console.log(salt);
    //     bcrypt.hash(newUser.password,salt)
    //     .then((hash) => {
    //         //console.log(hash);
    //         newUser.password = hash;
    //     })
    // })
    // newUser.save().then((doc) => {
    //     res.json({success: true, msg: 'User registered'})
    // },(e) => {
    //     res.json({success: false, msg: 'Failed to register user'});
    // })
   
})

router.post('/authenticate',(req,res,next) => {
    res.send('authenticate');
})

router.get('/profile',(req,res,next) => {
    res.send('profile');
})

module.exports = router;