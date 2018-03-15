const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = mongoose.model('users');

module.exports = (passport) => {
    passport.use(new LocalStrategy({ usernameField: 'name' }, 
        (name, password, done, result) => {
            User.findOne({
                name:name
            }).then(user => {
                if (!user){
                    return done(null, false, {message: 'User not found'});
                    // return done(null, false, result({status: 'No user found'}));
                }
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch){
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Password incorrect'});
                        // return done(null, false, console.log('Password incorrect'));
                    }
                })
            })
        }));

        passport.serializeUser((user, done) => {
            done(null, user.id);
        });

        passport.deserializeUser((id, done) => {
            User.findById(id, (err, user) => {
                done(err, user);
            });
        });
};