require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
const chatSchema = require('./schema/chat');
const http = require('http');
const server = http.createServer(app);
const socketIO = require('socket.io');

const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
// var users=new Users();
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
const io = socketIO(server);
io.sockets.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log("user disconnected");
    });
    socket.on('newMessage', function (data) {
        socket.join(data.roomName);

        var newMessage = new chatSchema({
            message: data.message,
            sender: data.active_username_sender,
            reciver: data.reciver
        });
        message1 = newMessage.save();//saving all 
        //finding and getting messages
        if(message1){
            if (chatSchema.find({
                $or: [
                    { 'sender': data.active_username_sender },
                    { 'sender': data.reciver }
                ]
            })) {
                chatSchema.find({
                    $or: [
                        { 'reciver': data.reciver },
                        { 'reciver': data.active_username_sender }
                    ]
                }, function (err, docs) {
                    console.log("sdsd",data)
                    if (!err) io.to(data.roomName).emit('newMessage', docs);
                }
                )
            }
        }
     

        // io.to(data.roomName).emit('newMessage', data);
    })
});
server.listen(port, function () {
    console.log('server is running on port no ' + port);
});