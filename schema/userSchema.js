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
    tokenVerify:{
        type:String
    }
});
var User=module.exports=mongoose.model('User',userSchema);