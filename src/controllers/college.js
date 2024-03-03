// collegeController.js
const { query } = require("express");
const College = require("../models/college");
const Intern = require("../models/intern")
const { validateName } = require("../utilis/validation");

exports.createCollege = async (req, res) => {
    try {
        const { name, fullname } = req.body;
        
        // Check if profileImage is missing
        if (!req.files || !req.files["profileImage"]) {
            return res.status(400).json({ status: false, message: "Profile image is missing." });
        }
        
        // Get profile image location
        const profileImageFileLocation = req.files["profileImage"][0].location;

        // Check if name is missing or invalid
        if (!name) {
            return res.status(400).json({ status: false, message: "Name is missing" });
        }
        // Assuming validateName is a separate function validating the name
        if (!validateName(name)) {
            return res.status(400).json({ status: false, message: "Name is invalid" });
        }

        // Create new college
        const created = await College.create({
            name,
            fullname,
            profileImage: profileImageFileLocation
        });

        // Return success message along with created college data
        return res.status(201).json({ status: true, message: "College data created successfully", data: created });
    } catch (error) {
        // Log error and return internal server error
        console.log(error.message);
        return res.status(500).json({ status: false, message: "Internal server error" });
    }
};


// get student intern detail by college name
exports.getIntern = async(req,res)=>{
    try{
        const{collegeName} = req.query;
        const query = {}; 
        if(collegeName){
            query.collegeName = collegeName
        }
        if(!collegeName){
            return res.status(400).json({status:false,message:"college name is missing"})
        }
        const resi = await Intern.find(query)
        return res.status(200).json({status:true,message:"intern data fetched successfully",data:resi})
    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({status:false,message:"internal server error"})
    }
}


