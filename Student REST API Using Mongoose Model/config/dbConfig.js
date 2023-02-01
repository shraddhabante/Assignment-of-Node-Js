let mongoose=require("mongoose");
let url="mongodb://127.0.0.1:27017/mydb"; //it contains url details with database name
mongoose.set('strictQuery', true);
let dbConnection=mongoose.connect(url).then(res=>console.log("db connected")).catch(error=>"error generated"+error)



module.exports=dbConnection;
