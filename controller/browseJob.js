const Jobs=require('../schema/postProject');

module.exports={
    browseJob: async(req,res)=>{
        try{
            const jobs= await Jobs.find();
            res.json(jobs);
        }catch(err){
            res.status(500).json({success:false,message:'Error occured'});
        }
        
    },
    myProject:async(req,res)=>{
        try{
            var username=req.body.username;
            const project= await Jobs.find({username:username});
            res.json(project);
        }catch(err){
            res.status(400).json({success:false,message:'Error occured'});

        }
       
    },
    search:async(req,res)=>{
        keyword=req.body.keyword
        const myPattern = new RegExp('(\\w* '+keyword+' \\w*)','gi');
        const matchedKey=await Jobs.find({ 
            // projectName:keyword
            $or:[
                {'projectName':myPattern},
                {'projectDetail':myPattern},
                {'projectSize':myPattern},
                {'skills':myPattern}
            ]
        }) ;
        if(matchedKey!=0){ //if match of keyword found >[] means not null then to return matched keyword project else whole project
            res.json(matchedKey);
        }
        else{
            const jobs= await Jobs.find();
            res.json(jobs);
        }
       
    }
}