const Intern = require("../models/intern")
const { validateName, validatePhone, validateEmail } = require("../utilis/validation")

exports.createIntern = async(req,res)=>{
    try{
        const{name,mobile,email,collegeName} = req.body

        if(!name){
            return res.status(400).json({status:false,message:"name is required"})
        }
        if(!mobile){
            return res.status(400).json({status:false,message:"mobile is required"})
        }
        if(!email){
            return res.status(400).json({status:false,message:"email is required"})
        }
        if(!collegeName){
            return res.status(400).json({status:false,message:"collegeName is required"})
        }

        if(!validateName(name)){
            return res.status(400).json({status:false,message:"name is invalid"})
        }
        if(!validatePhone(mobile)){
            return res.status(400).json({status:false,message:"mobile is invalid"})
        }
        if(!validateEmail(email)){
            return res.status(400).json({status:false,message:"email is invalid"})
        }

        const existingMobile = await Intern.findOne({
            mobile:mobile
        })
        if(existingMobile){
        return res.status(400).json({status:false,message:"mobile_no already exist."})
        }


        const existingEmail = await Intern.findOne({
            email:email
        })
        if(existingEmail){
            return res.status(400).json({status:false,message:"email already exist."})
        }

        const internPeople = await Intern.create({
            name,
            mobile,
            email,
            collegeName
        })
        return res.status(201).json({status:true,message:"intern data created successfully",data:internPeople})
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({staus:false,message:"internal server error"})
    }
}


