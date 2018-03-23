const express = require('express');
const router = express.Router();
const passport = require('passport-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

router.post('/register',(req,res,next) => {
    var newUser = new User({
        name: req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });
    bcrypt.genSalt()
    .then((salt) => {
        //console.log(salt);
        bcrypt.hash(newUser.password,salt)
        .then((hash) => {
            //console.log(hash);
            newUser.password = hash;
        })
    })
    newUser.save().then((doc) => {
        res.json({success: true, msg: 'User registered'})
    },(e) => {
        res.json({success: false, msg: 'Failed to register user'});
    })
   
})

router.post('/authenticate',(req,res,next) => {
    res.send('authenticate');
})

router.get('/profile',(req,res,next) => {
    res.send('profile');
})

module.exports = router;