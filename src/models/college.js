const mongoose = require("mongoose")
const collegeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    fullname:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

},{timeStamps:true}
)
const College = mongoose.model("College",collegeSchema)
module.exports =  College;


