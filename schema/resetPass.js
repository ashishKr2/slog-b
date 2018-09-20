var mongoose =require('mongoose');
var resetSchema=new mongoose.Schema({
   
    email:{
        type:String
    },
    password:{
        type:String
    }
   
});
var user=module.exports=mongoose.model('user',resetSchema);