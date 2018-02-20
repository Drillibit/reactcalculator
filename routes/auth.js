const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
require('../models/user');
const User = mongoose.model('users');
module.exports = (app) => {
    app.post('/api/users/login', (req, res, next) => {
        passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/api/users/login'
        })(req, res, next);
    });
    app.post('/api/users/register', (req, res) => {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: req.body.status
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                user.save()
                    .then(user => {
                        res.send(user)
                    })
            });
        });
    });
};