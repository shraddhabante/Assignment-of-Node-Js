let mongodb = require("mongodb");
let mongoClient = mongodb.MongoClient;
let url = "mongodb://127.0.0.1:27017";
mongoClient.connect(url, (err, client) => {
    if (!err) {
        console.log("database connected sucessfully")
        let db = client.db("mydb");

        //inserted one record
        // let Std1={_id:8,sname:"Kasihsh",age:19,class:10,marks:[{physics:65,math:73,biology:78}]}
        // db.collection("Student3").insertOne(Std1,(err1,result)=>{
        //     if(!err1){
        //         console.log("inserted record sucessfully")
        //     }else{
        //         console.log(err1)
        //     }
        //     client.close();
        // })

        //inserted Many
        let std2 = { _id: 9, sname: "Moose", age: 18, class: 12, marks: [{ physics: 90, math: 95, biology: 93 }] };
        let std3 = { _id: 10, sname: "Prakshi", age: 17, class: 11, marks: [{ physics: 69, math: 74, biology: 70 }] };
        db.collection("Student3").insertMany([std2, std3], (err1, result) => {
            if (!err1) {
                console.log("inserted record sucessfully")
            } else {
                console.log(err1)
            }
            client.close();

        })
    } else {
        console.log("Error generated" + err);
    }
})