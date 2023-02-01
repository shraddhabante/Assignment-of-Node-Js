let express = require("express");
let dbInfo = require("./config/dbConfig");
let employeeRouter = require("./router/employeeRouter");
let app = express();

dbInfo.dbConnect();

app.use(express.json());  //extract data from request data

// app.get("/",(request,response)=>{
//     response.send("Test")
// })

// http://localhost:3000/api/employees/*

app.use("/api/employees",employeeRouter);

app.listen(3000,()=>console.log("Server running on port number 3000"));