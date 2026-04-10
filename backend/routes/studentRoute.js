const express = require('express');
const router = express.Router();
const {createStudent,updateStudentById,getAllStudents,deleteStudnetById} = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/create-student', createStudent);
router.put('/update-student/:id', updateStudentById);
router.get('/get-students', getAllStudents);
router.delete('/delete-student/:id', deleteStudnetById);

module.exports = router;