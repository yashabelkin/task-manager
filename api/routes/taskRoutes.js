const express = require('express')
const router = express.Router({ mergeParams: true });

const taskController = require('./../controllers/taskController')

router
    .route('/')
    .get(taskController.getAllTasks)
    .post(
        taskController.setTaskIds,
        taskController.createTask
           
    )

router
    .route('/:id')
    .get(taskController.getTask)
    .patch(taskController.updateTask)
    .delete(taskController.deleteTask)

module.exports = router


