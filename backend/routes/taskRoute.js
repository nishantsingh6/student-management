const express = require("express");
const router = express.Router();

const {
  getTasks,
  assignTask,
  markComplete,
  deleteTask
} = require("../controllers/taskController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/tasks", authMiddleware, getTasks);
router.post("/add-task", authMiddleware, assignTask);
router.put("/:id", authMiddleware, markComplete);
router.delete("/delete-task/:id", authMiddleware, deleteTask);

module.exports = router;