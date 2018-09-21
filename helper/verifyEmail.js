var User = require('../models/user');
const bcrypt = require('bcryptjs');
const resetSchema = require('../schema/resetPass');
module.exports = {

    verify: async (req, res) => {
        var gen_token = req.body.token;
        User.getToken(gen_token, function (err, TokenVerified) {
            if (err) throw err;
            if (TokenVerified) {
                var usern = gen_token.substr(64);
                User.getByUsern(usern, (err, user) => {
                    if (err) throw err;
                    if (user) {
                        user.activateLogin = true;
                        user.save();
                    }
                });
                res.status(200).json({ success: true, message: "Verified successfull" })
            } else {
                res.sendStatus(404);
            }
        })
    },
    resetPass: (req, res) => {
        var reset = new resetSchema({
            username: req.body.username,
            resetTokenHash: req.body.token,
            password: req.body.password
        })
        User.getByUsern(reset.username, function (err, user) {
            if (err) throw err;
            if (user) {
                User.getToken(reset.resetTokenHash, (err, tv) => {
                    if (err) throw err;
                    if (tv) {
                        bcrypt.genSalt(10, function (err, salt) {
                            //password with incrypted hash value
                            bcrypt.hash(reset.password, salt, function (err, hash) {
                                if (err) throw err;
                                user.password = hash;
                                user.save();
                                res.status(200).json({ success: true, message: "Password reset successfull" })
                            })
                        })
                    }
                })

            }//
            else {
                res.status(400).json({ success: false, message: "Password cant be reset" })
            }
        })

    }
}