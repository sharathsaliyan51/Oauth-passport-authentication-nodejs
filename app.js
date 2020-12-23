const express = require('express');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const app = express();
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
//set up view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],

}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.MongoURI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to mongodb')
});

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


//home route
app.get('/', (req, res) => {
    res.redirect('/auth/login');
})

app.listen(3000, () => {
    console.log('server listening');
}) 