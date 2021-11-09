const express = require('express');
const { getAllTasks,getSingleTask,deleteTask,createTask,updateTask } = require('../controller/tasks');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;