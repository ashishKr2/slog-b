const mongoose=require('mongoose');
const chatSchema=new mongoose.Schema({
   message:String,
   sender:String,
   reciver:String
});
var chat=module.exports=mongoose.model('chat',chatSchema);