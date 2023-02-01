const { response, request } = require("express");
let studentModel = require("../model/studentModel");

//insert the record
let storeStudentInfo = async (request, response) => {
    let student = request.body;
    // console.log(student);
    // response.send("done");
    try {
        let result = await studentModel.insertMany(student);
        response.send(result);
    } catch (ex) {
        response.send(ex);
    }
}

//find All student Details
let findAllStudents = async (request, response) => {
    try {
        let result = await studentModel.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

//find student data by id
let findStudentById = async (request, response) => {
    try {
        let sid = request.params._id;
        let result = await studentModel.find({ _id: sid })
        response.json(result);
    } catch (err) {
        response.json(err);
    }
}

//update student by id
let updateStudentGrade = async (request, response) => {
    let student = request.body;
    try {
        let result = await studentModel.updateOne({ _id: student._id }, { grade: student.grade })
        if (result.modifiedCount > 0) {
            response.send("Your grade updated successfully");
        } else if (result.matchedCount > 0) {
            response.send("Your old grade and new grade is same")
        } else {
            response.send("Student not present");
        }
    } catch (err) {
        response.send(err);
    }
}

//delete student record by id
let deleteStudentById = async (request, response) => {
    try {
        let sid = request.params._id;
        let result = await studentModel.deleteOne({ _id: sid })
        if (result.deletedCount > 0) {
            response.send("Student details deleted successfully")
        } else {
            response.send("Student record not present with id as " + sid)
        }
    } catch (err) {
        response.send(err)
    }
}

//find student using grade
let findStudentByGrade = async (request, response) => {
    try {
        let sgrade = request.params.grade;
        let result = await studentModel.find({ grade: sgrade });
        response.json(result)
    } catch (err) {
        response.json(err)
    }
}

//find student using class
let findStudentByClass = async (request, response) => {
    try {
        let sclass = request.params.class;
        let result = await studentModel.find({ class: sclass });
        response.json(result);
    } catch (err) {
        response.json(err)
    }
}

//find student using address
let findStudentByAddress = async (request, response) => {
    try {
        let saddress =request.params.address;
        let result=await studentModel.find({address:saddress});
        response.json(result)
    }catch(err){
        response.json(err)
    }
}

//update student address
let updateStudentAddress=async(request,response)=>{
    let student=request.body;
    try{
        let result=await studentModel.updateOne({_id:student._id},{address:student.address})
        if(result.modifiedCount>0){
            response.send("Address updated sucessfully")
        }else if(result.matchedCount>0){
            response.send("Old and new address are same")
        }else{
            response.send("Record not present")
        }
    }catch(err){
        response.send(err);
    }
}

//update student class
let updateStudentClass=async(request,response)=>{
    let student=request.body;
    try{
        let result=await studentModel.updateOne({_id:student._id},{class:student.class});
        if(result.modifiedCount>0){
            response.send("Updated class successfully");
        }else if(result.matchedCount>0){
            response.send("Old and new address are same");
        }else{
            response.send("Record not present");
        }
    }catch(err){
        response.send(err)
    }
}


//delete student using grade
let deleteStudentByGrade=async(request,response)=>{
    try{
        let sgrade=request.params.grade;
        let result=await studentModel.deleteOne({grade:sgrade})
        if(result.deletedCount>0){
            response.send("Student details deleted successfully")
        }else{
            response.send("Student not present")
        }
    }catch(err){
        response.send(err);
    }
}

//delete student using class
let deleteStudentByClass=async(request,response)=>{
    try{
        let sclass=request.params.class;
        let result=await studentModel.deleteOne({class:sclass})
        if(result.deletedCount>0){
            response.send("Student details deleted successfully")
        }else{
            response.send("Student not present")
        }
    }catch(err){
        response.send(err);
    }
}
module.exports = { storeStudentInfo, findAllStudents, findStudentById, updateStudentGrade, deleteStudentById, findStudentByGrade, findStudentByClass ,findStudentByAddress,updateStudentAddress,updateStudentClass,deleteStudentByGrade,deleteStudentByClass};
