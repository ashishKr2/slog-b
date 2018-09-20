var User = require('../models/user');
const bcrypt = require('bcryptjs');
const userschema = require('../schema/userSchema');
const resetSchema=require('../schema/resetPass');
module.exports = {

    verify: async (req, res) => {
        var gen_token = req.params.token;
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
                res.status(200).send('Welcome...... You have been Successfully Verified as a Slog User');
            }
            else {
                res.sendStatus(404);
            }
        })

    },
    resetPass: (req, res) => {
        var reset = new resetSchema({
            email: req.body.email,
            password: req.body.password
        })

        User.getUserByEmail(reset.email, function (err, user) {
            if (err) throw err;
            if (user) {
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
            else {
                res.status(400).json({ success: false, message: "Password cant be reset" })
            }
        })

    }
}