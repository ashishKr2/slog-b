const userschema = require('../schema/userSchema');
const nodemailer = require('nodemailer');
var User = require('../models/user');
const config = require('../config/database');

module.exports = {
    resetPass: (req, res) => {
        var newUser = new userschema({
            email: req.body.email,
            resetTokenHash: req.body.resetTokenHash,
        });
        User.getUserByEmail(newUser.email, function (err, user) {
            if (err) throw err;
            if (user) {
                //node mailer
                nodemailer.createTestAccount((err, account) => {
                    // create reusable transporter object using the default SMTP transport
                    let transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: config.gmail,
                            pass: config.password
                        }
                    });
                    
                    // setup email data with unicode symbols
                    let mailOptions = {
                        from: '"Slog 👻" <ashish@ashish.com>', // sender address
                        to: newUser.email,
                        subject: 'Reset Slog Password ', // Subject line
                        text: `Click to reset`, // plain text body
                        html: ` <b>Hello again user ...</b> ........... <hr></hr><br>
                                    <b>This is one time reset password link :</b> <a href="${req.headers.origin}/resetPass/${user.tokenHash}" 
                                    (click)="revert()">
                                     Click this link to verify</a>
                                    </br><hr>
                                    <b>Or</b> copy and paste below link to reset your password :
                                    <br>
                                    ${req.headers.origin}/resetPass/${user.tokenHash}
                                    `
                    };

                    // send mail with defined transport object
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            res.status(500).json({ success: false, message: 'Mail not sent' });

                        }
                        else{
                            res.status(200).json({ success: true, message: 'Resest password mail sent' });

                        }
                        
                    });
                });
                //end of node mailer
            }else{
                res.status(400).json({ success: false, message: 'Oops.. This email is not registered' });
            }
        })
    }
}