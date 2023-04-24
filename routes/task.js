const express = require('express');
const router  = express.Router();
const taskController = require('../controllers/taskController');

router.get("/tasks", taskController.getAllTask);
router.post("/tasks", taskController.addTask);
router.get("/tasks/:id", taskController.getById);
router.put("/tasks/:id", taskController.updateTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;