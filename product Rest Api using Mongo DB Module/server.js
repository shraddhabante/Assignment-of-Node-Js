
let express = require("express");
let dbInfo = require("./config/dbConfig");
let prodRouter = require("./router/productRouter");
let app = express();
dbInfo.dbConnect();

//middleware
app.use(express.json()); //extract data from request body

// app.get("/",(req,res)=>{
//     response.send("test")
// })

//http://localhost:3000/api/product/*
app.use("/api/product", prodRouter)

app.listen(3000, () => console.log("Server running on port number 3000"));