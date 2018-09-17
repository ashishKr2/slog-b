var mongoose =require('mongoose');
var userSchema=new mongoose.Schema({
    username:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    },
    tokenHash:{
        type:String,
        required:true
    },
    activateLogin:{
        type:Boolean,
        default:false
    }
});
var User=module.exports=mongoose.model('User',userSchema);