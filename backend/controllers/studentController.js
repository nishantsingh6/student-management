const Student = require('../models/Student');

//Create a new student

exports.createStudent = async (req, res) => {
    try{
        const {name, email, standard} = req.body;
        if(!name || !email || !standard) {
            return res.status(400).json({
                message:"Please provide all required fields"
            });
        }
        const newStudent = await Student.create({
            name,email,standard
        });
        return res.status(201).json({
        message:"Student created successfully",
        student: newStudent
        })

    }catch(error){
      return  res.status(500).json({
            message:"Error creating student",
            error:error.message
        })
    }
}

//Update a student by id
exports.updateStudentById = async (req, res) => {
    try{
          const {id} = req.params;
          const {name, email, standard} = req.body;    
          const updatedStundent = await Student.findByIdAndUpdate(id, {name,email,standard}, {new:true});
        return res.status(200).json({
            message:"Student updated successfully",
            student:updatedStundent
        });
    }catch(error){
      return   res.status(500).json({
            message:"Error updating student",
            error:error.message
        })
    }
}

//Get all students 
exports.getAllStudents = async(req, res) => {
    try{
       const students = await Student.find();
         return res.status(200).json({
            message:"Students fetched successfully",
            students:students
         })
    }catch(error){
        res.status(500).json({
            message:"Error fetching students",
            error:error.message
        })
    }
}

//Delete a student by id
exports.deleteStudnetById = async (req, res) => {
    try{
       const {id} = req.params;
       await Student.findByIdAndDelete(id, {new:true});
       return res.status(200).json({
        message:"Student deleted successfully"
       })
    }catch(error){
        return res.status(500).json({
            message:"Error deleting student",
            error:error.message
        })
    }
}