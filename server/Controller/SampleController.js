const SampleModel = require('../Model/SampleModel');



exports.create=async(req,res)=>
{

    try
    {
        {
            const {Email,PassWord}=req.body;
            const sampledoc=new SampleModel({Email,PassWord})
            sampledoc.save()
            return res.status(201).json({message:"Created Sucessfully",data:sampledoc})
          }
    }

    catch(err)
    {
        return res.status(404).json({error:"something webt wrong",message:err.message})
    }

}