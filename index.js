const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");


const app = express();
app.use(express.json());


// middleware

app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
})

// route 
app.use("/",(req,res) => {
    res.json({message:"hi backend"})
    // next();
})
app.use("/api/user",userRoutes);




// connect to db
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to db")
}).catch(error => {
    console.log(error)
})

// listen app on this port
app.listen(process.env.PORT,()=>{
    console.log("server started on port : 5000")
})