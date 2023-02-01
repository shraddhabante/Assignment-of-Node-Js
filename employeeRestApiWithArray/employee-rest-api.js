let express = require("express");
let bodyParser = require("body-parser");
let app = express();

//middlware added
app.use(bodyParser.json());
let emp1 = { eid: 100, ename: "John", designation: "Developer", age: 21 }
let emp2 = { eid: 101, ename: "Smith", designation: "HR consultant", age: 20 }
let emp3 = { eid: 102, ename: "Raj", designation: "Data Scientist", age: 24 }
let emp4 = { eid: 103, ename: "Shra", designation: "Senior Manager", age: 26 }
let employees = [];
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
employees.push(emp4);

app.get("/", (request, response) => {
    response.send("welcome to employee data with get method")
})


app.get("/getEmployee", (request, response) => {
    response.json(emp1);
})


app.get("/getEmployees", (request, response) => {
    response.json(employees);
})


// search employee using query param 
app.get("/searchEmployeByQueryParam", (request, response) => {
    let eid = request.query.eid;
    let result = employees.find(e => e.eid == eid);
    if (result != undefined) {
        response.json(result);
    } else {
        response.json({ "msg": "Record not present" })
    }
})

// search cusomer using query param 
app.get("/searchEmployeByPathParam/:eid", (request, response) => {
    let eid = request.params.eid;
    let result = employees.find(e => e.eid == eid);
    if (result != undefined) {
        response.json(result);
    } else {
        response.json({ "msg": "Record not present" })
    }
})

//http://localhost:3000/storeEmployee
//simply create the data
app.post("/storeEmployee",(request,response)=>{
    let employee=request.body;
    console.log(employee);
    response.send("Stored Done!");
})

//create or store the data
//http://localhost:3000/storeEmployee
app.post("/storeEmployee", (request, response) => {
    let employee = request.body;
    let result = employees.find(e => e.eid == employee.eid);
    if (result == undefined) {
        employees.push(employee);
        response.send("employee data stored successfully");
    } else {
        response.send("Record didn't stored ,employee id must be unique");
    }

})

//update age
//http://localhost:3000/updateEmployeeAge
app.patch("/updateEmployeeAge", (request, response) => {
    let employee = request.body;
    let index = employees.findIndex(e => e.eid == employee.eid);
    if (index < 0) {
        response.send("no customer present with id as" + employee.eid);
    } else {
        employees[index].age = employee.age;
        response.send("age updated");
    }

})
//update name
//http://localhost:3000/updateEmployeeName
app.patch("/updateEmployeeName",(request,response)=>{
    let employee=request.body;
    let index=employees.findIndex(e=>e.eid==employee.eid);
    if(index<0){
        response.send("no customer present with id as"+employee.eid);
    }else{
        employees[index].ename=employee.ename;
        response.send("name updated");
    }
})
//update age and name
//http://localhost:3000/updateEmployee
app.put("/updateEmployee",(request,response)=>{
    let employee=request.body;
    let index=employees.findIndex(e=>e.eid==employee.eid);
    if(index<0){
        response.send("No employee present with id as :"+employee.eid)
    }else{
        employees[index].age=employee.age;
        employees[index].ename=employee.ename;
        response.send("customer details updated sucessfully")
    }
})
//delete 
app.delete("/deleteEmployee/:eid",(request,response)=>{
    let eid=request.params.eid;
    let index=employees.find(e=>e.eid==eid);
    if(index<0){
        response.send("No Customer present with id as "+eid);
    }else{
        employees.splice(index,1);
        response.send("customer details deleted sucessfully");
    }
})
app.listen(3000, () => console.log("Server running on port number 3000"))



