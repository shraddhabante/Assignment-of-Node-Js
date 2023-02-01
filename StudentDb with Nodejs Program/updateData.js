let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
mongoClient.connect(url,(err,client)=>{
    if(!err){
        console.log("database connected sucessfully");
        let db=client.db("mydb");
        db.collection("Student3").updateOne({_id:1},{$set:{sname:"Kiki"}},(err1,result)=>{
            if(!err1){
                if(result.modifiedCount>0){
                    console.log("record updated")
                }else if(result.matchedCount>0){
                    console.log("old value & new value are same so record can't updated")
                }else{
                    console.log("record didn't update")
                }
            }else{
                console.log(err1);
            }
            client.close();
        })
        // db.collection("Student3").updateMany([{_id:1},{_id:4}],{$set:{age:17}},(err1,result)=>{
        //     if(!err1){
        //         if(result.modifiedCount>0){
        //             console.log("record updated")
        //         }else if(result.matchedCount>0){
        //             console.log("old value & new value are same so record can't updated")
        //         }else{
        //             console.log("record didn't update")
        //         }
        //     }else{
        //         console.log(err1);
        //     }
        //     client.close();
        // })
    }else{
        console.log("error generated"+err)
    }
})