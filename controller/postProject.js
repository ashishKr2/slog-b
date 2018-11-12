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
            res.status(500).json({success:false,message:'Error occured'});
        }      
    },
    //saving id and email on bid click so i can get in current work with that user
    bid: async(req,res)=>{
        var myBid=await new bidSchema({
            id:req.body.id,
            email:req.body.email,
            project_bidder:req.body.project_bidder,
            project_owner:req.body.project_owner
        });
        try{
            console.log(myBid)
            bid=await myBid.save();
            res.status(200).json({success:true,message:'Project Bid'});
        }catch(err){
            res.status(500).json({success:false,message:'Error occured'});
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
            res.status(500).json({success:false,message:'Something Wrong'})
        }            
        
    },
    //getting from inbox - active username to finding projwct owner name during bid
    getProjectOwner:async(req,res)=>{
        var project_bidder=req.body.project_bidder;
        const pb= await bidSchema.find({project_bidder:project_bidder});
        if(pb){
            const po= pb.map(d=>d.project_owner);
            const pos= await bidSchema.find({project_owner:po});
            res.json(pos.map(pos=>pos.project_owner)); // returning project owner name 
        }else{
            res.status(500).json({success:false,message:'Something Wrong'})
        } 
    },

    // getting bidder name and add to project-owner profile
    getProjectBidder:async(req,res)=>{
        var project_owner=req.body.project_owner;
        const po= await bidSchema.find({project_owner:project_owner});
        if(po){
            const pb=po.map(d=>d.project_bidder);
            const pbs=await bidSchema.find({project_bidder:pb});
            res.json(pbs.map(pbs=>pbs.project_bidder));
        }else{
            res.status(500).json({success:false,message:'Something Wrong'})
        } 
    }

}