const router = require('express').Router();
const passport = require('passport');
const user = require('../controller/user');
const verifyEmail=require('../helper/verifyEmail');
module.exports = (passportapp) => {
    router.post('/signup', user.signup);
    router.post('/login', user.login);
    router.get('/verification/:token',verifyEmail.verify);
    router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res, next) {
        res.json({ user: req.user });
    });
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');

    });
   
    return router;

}
