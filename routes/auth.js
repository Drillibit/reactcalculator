const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');
require('../models/user');

const User = mongoose.model('users');

module.exports = (app) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => {
                done(null, user);
            })
    });

    passport.use(new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id })
            if(existingUser){
                done(null, existingUser);
            } else {
            const user = await new User({ googleId: profile.id }).save();
                    done(null, user);
            }
        })
    );

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/auth/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
};