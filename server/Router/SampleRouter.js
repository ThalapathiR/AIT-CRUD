const {Router}=require("express")

const router=Router();

const {create}=require("../Controller/SampleController")

router.post('/create',create)

module.exports=router