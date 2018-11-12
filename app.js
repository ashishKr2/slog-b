require('dotenv').config();
const port = process.env.PORT || 8080;
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
const http=require('http').Server(app);
const io=require('socket.io')(http);
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
require('./config/passport')(passport);
require('./config/mongo')(mongoose);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"))
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
require("./routes")(app, passport);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect',function(){
        console.log("user disconnected");
    });
    socket.on('message',(message)=>{
        console.log("Message Received:"+message);
        io.emit('message',{type:'new-message',text:message});
    })
  });
http.listen(port, function () {
    console.log('server is running on port no ' + port);
});