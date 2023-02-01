let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");


router.post("/storeStudent",studentController.storeStudentInfo);

router.get("/findAllStudents",studentController.findAllStudents);

router.get("/findStudentById/:_id",studentController.findStudentById);

router.patch("/updateStudentGrade",studentController.updateStudentGrade);

router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);

router.get("/findStudentByGrade/:grade",studentController.findStudentByGrade);

router.get("/findStudentByClass/:class",studentController.findStudentByClass);

router.get("/findStudentByAddress/:address",studentController.findStudentByAddress);

router.patch("/updateStudentAddress",studentController.updateStudentAddress);

router.patch("/updateStudentClass",studentController.updateStudentClass);

router.delete("/deleteStudentByGrade/:grade",studentController.deleteStudentByGrade);

router.delete("/deleteStudentByClass/:class",studentController.deleteStudentByClass)

module.exports=router;
