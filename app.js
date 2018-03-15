const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');



const keys = require('./config/keys');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(bodyParser.json());
//Express session
app.use(session({
    secret: 'dlnfkdfv',
    resave: true,
    saveUninitialized: true
}));
//Flash messages
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//User route
require('./routes/auth')(app);
require('./utils/passport')(passport);
//Material route
require('./routes/material')(app);
//Branch route
require('./routes/branches')(app);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
console.log(`App running at ${PORT}`);
app.listen(PORT);