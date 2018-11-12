const mongoose=require('mongoose');
const bidSchema=new mongoose.Schema({
   email:String,
   id:String,
   project_bidder:String,
   project_owner:String
});
var bid=module.exports=mongoose.model('bid',bidSchema);