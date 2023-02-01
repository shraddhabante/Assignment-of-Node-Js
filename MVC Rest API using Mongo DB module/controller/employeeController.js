
let empCollection = require("../config/dbConfig");

exports.getAllEmployees = async (request, response) => {
    try {
        let result = await empCollection.getCollection().find().toArray();
        response.json(result);
    } catch (ex) {
        response.json({ "msg": "Error generated " + ex });
    }
}
exports.findEmployeeById = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
        let result =await empCollection.getCollection().findOne({_id:empId});
        if(result==null){
            response.json({"msg":"Record not present with id as "+empId})
        }else {
            response.json(result);
        }
        }catch(ex){
            response.json({"msg":"Error generated "+ex});
        }
}

//Create rest api in existing project to find employee details whose age is > 26
exports.findEmployeeAge=async(request,response)=>{
    try{
        let storeAge=await empCollection.getCollection().find({age:{$gt:26}}).toArray();
        response.json(storeAge);
    }catch(ex){
        response.json("record not present"+ex)
    }
}


exports.storeEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().insertOne(emp);
    response.send(result);
    }catch(ex){
        response.send(ex);
    }
}

exports.deleteEmployee = async (request,response)=> {
    let empId = eval(request.params._id);
    try{
    let result  = await empCollection.getCollection().deleteOne({_id:empId});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with id as "+empId);
    }
    }catch(ex){
        response.send(ex);
    }
}

//update Salary
exports.updateEmployee= async (request,response)=> {
    let emp = request.body;
    //console.log(emp);
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{salary:emp.salary}});
    if(result.modifiedCount>0){
        response.send("Salary updated successfully")
    }else if(result.matchedCount>0){
        response.send("salary didn't update becuase old and new salary are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}

//update Age
exports.updateEmployeeAge=async(request,response)=>{
    let emp = request.body;
    try{
    var result = await empCollection.getCollection().updateOne({_id:emp._id},{$set:{age:emp.age}});
    if(result.modifiedCount>0){
        response.send("Age updated successfully")
    }else if(result.matchedCount>0){
        response.send("Age didn't update becuase old and new salary are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}

//deleted record by age field
exports.deleteEmployeeAge = async (request,response)=> {
    let empAge = eval(request.params.age);
    try{
    let result  = await empCollection.getCollection().deleteMany({age:{$gt:empAge}});
    //response.send(result);
    if(result.deletedCount>0){
        response.send("Record deleted successfully")
    }else{
        response.send("Record not present with id as "+empAge);
    }
    }catch(ex){
        response.send(ex);
    }
}

//create rest api in existing project to finde employee details whose salary is betweeen 20000 to 25000
exports.findEmployeeSalary=async(request,response)=>{
    try{
        let storeSalary=await empCollection.getCollection().find({$and:[{salary:{$gt:20000}},{salary:{$lt:30000}}]}).toArray();
        response.json(storeSalary);
    }catch(ex){
        response.json("record not present"+ex)
    }
}

//insert multiple record
exports.storeManyRecord= async (request,response)=> {
    let emp = request.body;
    try{
    var result = await empCollection.getCollection().insertMany(emp);
    response.send(result);
    }catch(e){
        response.send(e);
    }
}

//update the record
exports.updateManyCity= async (request,response)=> {
    let empCity=request.params.city;
    try{
    var result = await empCollection.getCollection().updateMany({city:empCity},{$set:{city:"Bhopal"}});
    if(result.modifiedCount>0){
        response.send("City name updated successfully")
    }else if(result.matchedCount>0){
        response.send(" city name update becuase old and new salary are same")
    }else {
        response.send("record not present")
    }
    }catch(ex){
        response.send(ex);
    }
}
