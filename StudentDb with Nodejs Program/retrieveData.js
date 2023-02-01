let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("database connected sucessfully")
        let db=client.db("mydb");
        let getData=db.collection("Student3").find({age:{$gt:18}});
        getData.forEach(doc=>{
            console.log("Id is "+doc._id);
        }).finally(()=>{
            client.close();
        })
    }else{
        console.log("error generated"+err)
    }
})