const jwt = require('jsonwebtoken');
var User = require('../models/user');
const config = require('../config/database');
const userschema = require('../schema/userSchema');
const verifier = require('email-verify');
const nodemailer = require('nodemailer');
var token;
module.exports = {
    signup: (req, res) => {
        var newUser = new userschema({
            username: req.body.username,
            name:req.body.name,
            email: req.body.email,
            password: req.body.password,
            tokenHash: req.body.tokenHash,
        });

        User.getByUsern(newUser.username, function (err, user) {
            if (err) throw err;
            if (user) {
                return res.status(501).json({ success: false, message: 'Choose another username' });

            }
            else {
                User.getUserByEmail(newUser.email,(err,user)=>{
                    if(err) throw err;
                    if(user){
                        console.log(user);
                        return res.status(501).json({ success: false, message: 'Choose another email' });
                    }
                    else{

                        User.createUser(newUser, function (err, user) {
                            if (err) {
                                res.status(409).json({ success: false, message: 'Something wrong' });
        
                            }
                            else {
                                verifier.verify(newUser.email, function (err, info) {
                                    if (info.success) {
                                        console.log("Success (T/F): " + info.success);
                                        console.log("Info: " + info.info);
                                        res.status(200).json({ success: true, message: 'SignUp Successful ' });
                                        // end of email varification
        
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
                                                subject: 'Hello User ', // Subject line
                                                text: `Click to verify`, // plain text body
                                                html: ` <b>Welcome To Slog</b> ........... <hr></hr><br>
                                            <b>This is one time verification link :</b> <a href="${req.headers.origin}/verification/${newUser.tokenHash}" 
                                            (click)="revert()">
                                             Click this link to verify</a>
                                            </br><hr>
                                            <b>Or</b> copy and paste below link to verify your account :
                                            <br>
                                            ${req.headers.origin}/verification/${newUser.tokenHash}
                                            `
                                            };
        
                                            // send mail with defined transport object
                                            transporter.sendMail(mailOptions, (error, info) => {
                                                if (error) {
                                                    return console.log(error);
                                                }
                                                console.log('Message sent: %s', info.messageId);
        
                                            });
                                        });
                                        //end of node mailer
                                    }
                                    else {
                                  res.status(401).json({ success: false, message: 'Email not valid' })
        
                                    }
                                });
                            }
                        });
                    }
                })
                //
            }
        })


    },
   
    login: (req, res) => {
        var email = req.body.email;
        var password = req.body.password;

        User.getUserByEmail(email, function (err, user) {
            if (err) throw err;
            if (!user) {
                //return res.json({ success: false, message: 'no user found' });
                return res.sendStatus(404);
            }
            if (user.activateLogin) {
                User.comparePassword(password, user.password, function (err, isMatch) {
                    if (err) throw err;
                    if (isMatch) {
                        token = jwt.sign(user.toJSON(), config.secret, { expiresIn: 600000 });
                        res.json({
                            success: true, token: 'JWT ' + token,
                            user: {
                                id: user._id,
                                username: user.username,
                                email: user.email,
                                password: user.password,
                            }
                        });
                    } else {
                        //return res.json({ success: false, message: 'password not match' });
                         res.status(401).send('Password not matched');
                    }
                });
            } else {
                res.status(400).send('Verify Email First..!!');
            }

        });


    }
}