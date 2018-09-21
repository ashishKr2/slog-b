var mongoose =require('mongoose');
var resetSchema=new mongoose.Schema({
   
    username:{
        type:String
    },
    password:{
        type:String
    },
    resetTokenHash:{
        type:String
    }
   
});
var user=module.exports=mongoose.model('user',resetSchema);