const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

module.exports = (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'name' }, 
        (name, password, done) => {
            // User.findOne({
            //     name
            // }).then(user => {
            //     if 
            // })
        }));
};