const mongoose=require('mongoose');
const bidSchema=new mongoose.Schema({
   email:String,
   id:String
});
var bid=module.exports=mongoose.model('bid',bidSchema);