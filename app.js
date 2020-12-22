const express = require('express');
const authRoutes = require('./routes/authRoutes');
const app = express();
const passportSetup = require('./config/passport-setup');
//set up view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);


//home route
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(3000, () => {
    console.log('server listening');
})