const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('../models/user');

const User = mongoose.model('users');
module.exports = (app) => {
    app.get('/api/users/login', (req, res) => {

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