const router = require('express').Router();
const passport = require('passport');
const user = require('../controller/user');
const verifyEmail=require('../helper/verifyEmail');
const resetPass=require('../controller/resetPassword');
const project=require('../controller/postProject');
const browseJob=require('../controller/browseJob');
const chat=require('../controller/chat');
module.exports = (passportapp) => {
    router.post('/signup', user.signup);
    router.post('/login', user.login);
    router.post('/forgetPassword',resetPass.resetPass);
    router.post('/verification',verifyEmail.verify);
    router.put('/resetPassword',verifyEmail.resetPass);
    router.get('/profile', passport.authenticate('jwt', { session: false }), function (req, res, next) {
        res.json({ user: req.user });
    });
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');

    });
   router.post('/postProject',project.postProject);
   router.post('/browseJob',browseJob.browseJob);
   router.post('/bid',project.bid);
   router.post('/bids',project.bids);
   router.post('/myProject',browseJob.myProject);
   router.post('/getProjectOwner',project.getProjectOwner);
   router.post('/getProjectBidder',project.getProjectBidder);
   router.post('/chat',chat.postMessage);
   router.post('/getChat',chat.getmessage);
   router.post('/keyword',browseJob.search);
    return router;

}
