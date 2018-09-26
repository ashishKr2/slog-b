const Jobs=require('../schema/postProject');

module.exports={
    browseJob: async(req,res)=>{
        const jobs= await Jobs.find();
        res.json(jobs);
    }
}