const express = require("express");
const { createIntern, getIntern } = require("../controllers/intern");
const route = express.Router();

route.post("/createintern",createIntern)
// route.get("/getintern",getIntern)

module.exports = route;
