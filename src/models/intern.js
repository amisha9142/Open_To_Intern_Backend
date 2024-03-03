const mongoose = require("mongoose")
const internSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true  //// jb v modal m required true kro wha p type dena compulsory h otherwise vo run ni hoga .
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    // collegeId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref: "College"
    // },
    collegeName:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
const Intern = mongoose.model("Intern",internSchema)
module.exports = Intern;

