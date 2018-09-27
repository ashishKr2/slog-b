const Jobs=require('../schema/postProject');

module.exports={
    browseJob: async(req,res)=>{
        const jobs= await Jobs.find();
        res.json(jobs);
    },
    myProject:async(req,res)=>{
        var username=req.body.username;
        const project= await Jobs.find({username:username});
        res.json(project);
    }
}