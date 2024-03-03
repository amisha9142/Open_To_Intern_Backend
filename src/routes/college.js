// collegeRoute.js
const express = require("express");
const route = express.Router();
const { createCollege, getIntern } = require("../controllers/college"); // Corrected controller import
const upload = require("../utilis/aws"); // Assuming you're handling file uploads with AWS S3

route.post("/createcollege", upload.fields([{ name: "profileImage" }]), createCollege);
route.get("/getintern",getIntern)

module.exports = route;
