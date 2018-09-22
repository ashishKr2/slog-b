var mongoose =require('mongoose');
var userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    tokenHash:{
        type:String,
    },
    resetTokenHash:{
        type:String,
    },
    activateLogin:{
        type:Boolean,
        default:false
    }
});
var User=module.exports=mongoose.model('User',userSchema);