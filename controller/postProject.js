const postProjectSchema=require('../schema/postProject');
module.exports={
    postProject:(req,res)=>{
        var newProject=new postProjectSchema({
            projectName:req.body.projectName,
            projectDetail:req.body.projectDetail,
            paymentMode:req.body.paymentMode,
            inr:req.body.inr,
            projectSize:req.body.projectSize,
            skills:req.body.skills
        });
    }
}