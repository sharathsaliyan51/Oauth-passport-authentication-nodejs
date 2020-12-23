const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//set up view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.MongoURI, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to mongodb')
});

//set up routes
app.use('/auth', authRoutes);


//home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('server listening');
})