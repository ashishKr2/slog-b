const postProjectSchema=require('../schema/postProject');
const bidSchema= require('../schema/bid');
const Jobs=require('../schema/postProject');
module.exports={
    postProject: async(req,res)=>{
        var newProject=await new postProjectSchema({
            username:req.body.username,
            projectName:req.body.projectName,
            projectDetail:req.body.projectDetail,
            paymentMode:req.body.paymentMode,
            projectSize:req.body.projectSize,
            skills:req.body.skills
        });
        try{
            project=await newProject.save();
            res.status(200).json({success:true,message:'Project posted'});
        }catch(err){
            res.status(400).json({success:false,message:'Error occured'});
        }      
    },
    //saving id and email on bid click so i can get in current work with that user
    bid: async(req,res)=>{
        var myBid=await new bidSchema({
            id:req.body.id,
            email:req.body.email
        });
        try{
            bid=await myBid.save();
            res.status(200).json({success:true,message:'Project Bid'});
        }catch(err){
            res.status(400).json({success:false,message:'Error occured'});
        }
    },
    //geting bided data to active/current work with loggedIn email and by compaing id
    bids:async(req,res)=>{
        var email=req.body.email;
        const myBid=await bidSchema.find({email:email});
        if(myBid){
            // console.log("true hai");
            const ids = myBid.map(d=> d.id);
            //  console.log('Idsss: ', ids);
            const jobs= await Jobs.find({_id:ids});
            // console.log(jobs);
            res.json(jobs);
        }else{
            res.status(200).json({success:false,message:'Something Wrong'})
        }
        
       
        
        
        
    }
}