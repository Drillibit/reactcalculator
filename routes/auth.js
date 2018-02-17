const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
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

        bcrypt.genSalt(10, async (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) throw err;
                user.password = hash;
                try {
                    await user.save();
                    res.send(user);
                } catch (err) {
                    res.status(422).send(err);
                }
            });
        });
    });
};