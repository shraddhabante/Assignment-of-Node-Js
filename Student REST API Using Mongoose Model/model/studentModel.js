let mongoose=require("mongoose");
mongoose.pluralize(null);
let studentSchema=mongoose.Schema({
    _id:Number,

    first_name:{
        type:String,
        required:[true,"first name required"]},

    last_name:{
        type:String,
        required:false},
    age:{
        type:Number,
        required:[true,"Age must be required"],
        min:6,
        max:18
    },
    class: {
        type:String,
        required:[true,"class section must be required"]
    },
    grade:{
        type:String,
        required:[true,"grade must be required"]
    },
    address: {
        type:String,
        required:[true,"Address must be required"]
    }
    
})

// 1st parameter providing collection name
//2nd prameter hold schema details. 
let studentModel = mongoose.model("Student",studentSchema);

module.exports = studentModel;

