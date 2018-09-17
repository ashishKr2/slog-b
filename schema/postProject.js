const mongoose=require('mongoose');
const postProjectSchema=new mongoose.Schema({
    projectName:{
        type:String
    },
    projectDetail:String,
    paymentMode:String,
    inr:String,
    projectSize:String,
    skills:String
});
var postProject=module.exports=mongoose.model('PostProject',postProjectSchema);