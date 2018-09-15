const mongoose = require('mongoose');
const config = require('./database');
const User = require('../schema/userSchema');
module.exports=(mongo)=>{
    nev=require('email-verification')(mongoose);
    mongoose.connect(config.db, { useNewUrlParser: true });
    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('connected', () => {
        console.log('connected to database mongodb 27017');
    });
    mongoose.connection.on('error', (err) => {
        if (err) {
            console.log('error in database' + err);
        }
    });
    mongoose.Promise = global.Promise;
   
    nev.configure({
        verificationURL: 'http://localhost:4200/${URL}',
        persistentUserModel: User,
        tempUserCollection: 'myawesomewebsite_tempusers',
     
        transportOptions: {
            service: 'Gmail',
            auth: {
                user: 'ashish.23213@lpu.co.in',
                pass: '23213'
            }
        },
        verifyMailOptions: {
            from: 'Do Not Reply <do_not_reply@gmail.com>',
            subject: 'Please confirm account',
            html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
            text: 'Please confirm your account by clicking the following link: ${URL}'
        }
    }, function(error, options){
    });

};