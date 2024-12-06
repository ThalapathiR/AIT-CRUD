const {Schema,model}=require("mongoose")

const SampleModel =new Schema(
    {
        Email:{type:String},
        PassWord:{type:String}
    }
)

module.exports=model("user",SampleModel)