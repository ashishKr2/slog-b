const postProjectSchema=require('../schema/postProject');
module.exports={
    postProject:(req,res)=>{
        var newProject=new postProjectSchema({
            username:req.body.username,
            projectName:req.body.projectName,
            projectDetail:req.body.projectDetail,
            paymentMode:req.body.paymentMode,
            projectSize:req.body.projectSize,
            skills:req.body.skills
        });
        newProject.save((err, message) => {
            if (err) {
                res.status(400).json({success:false,message:'Error occured'});
            }
            else {
                res.status(200).json({success:true,message:'Project posted'});
            }
        });
    }
}