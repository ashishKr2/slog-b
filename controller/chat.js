const chatSchema = require('../schema/chat');
module.exports = {
    postMessage: async (req, res) => {
        var newMessage = await new chatSchema({
            message: req.body.message,
            sender: req.body.active_username_sender,
            reciver: req.body.reciver
        });
        try{
            message= await newMessage.save();
            res.status(200).json({success:true,message:'Message saved'});
        }
        catch(err){
            res.status(500).json({success:false,message:'Error occured'});
        }
    },

    getmessage: (req,res)=>{
        sender=req.body.sender,
        reciver=req.body.reciver
        if(chatSchema.find({
            $or:[
                {'sender':sender},
                {'sender':reciver}
            ]
        })){
            chatSchema.find({
                $or:[
                    {'reciver':reciver},
                    {'reciver':sender}
                ]
            },function(err,docs){
                if(!err) res.json(docs);
            }
            )
        }
    }
}