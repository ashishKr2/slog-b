const mongoose=require('mongoose');
const postProjectSchema=new mongoose.Schema({
    projectName:{
        type:String
    },
    projectDetail:String,
    paymentMode:String,
    projectSize:String,
    skills:String,
    username:String
});
var postProject=module.exports=mongoose.model('PostProject',postProjectSchema);