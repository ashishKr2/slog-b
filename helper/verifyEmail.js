var User = require('../models/user');

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

    }
}