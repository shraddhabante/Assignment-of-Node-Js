let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("database connected sucessfully")
        let db=client.db("mydb");

        //deleted one record
        // db.collection("Student3").deleteOne({_id:2},(err1,result)=>{
        //     if(!err1){
        //         if(result.deletedCount>0){
        //             console.log("deleted record suceesfully")
        //         }else{
        //             console.log("record not present")
        //         }
        //     }
        //     client.close();
        // })

        //deleted multiple record
        db.collection("Student3").deleteMany({$or:[{_id:9},{_id:8}]},(err1,result)=>{
            if(!err1){
                if(result.deletedCount>0){
                    console.log("deleted record suceesfully")
                }else{
                    console.log("record not present")
                }
            }
            client.close();
        })

    }else{
        console.log("error generated"+err)
    }
})