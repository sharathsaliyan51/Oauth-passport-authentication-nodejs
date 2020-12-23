const router = require('express').Router();
const passport = require('passport');

//auth login
router.get("/login", (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    res.send('logging out')
})

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


//callback routes for google to redirect us
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached callback URI');
})
module.exports = router;