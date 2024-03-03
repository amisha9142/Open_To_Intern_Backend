// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const collegeRoute = require("./src/routes/college");
const internRoute = require("./src/routes/intern")

dotenv.config({ path: "./.env" });

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

// Routes setup
app.use("/api/college", collegeRoute);
app.use("/api/intern",internRoute);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
