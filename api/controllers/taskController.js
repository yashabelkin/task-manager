const Task = require('./../models/taskModel')
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const service = require('../services/handlerService');



exports.getAllTasks = catchAsync(async (req, res, next) => {
    
    const tasks = await Task.find();

    res.status(200).json({
        status: 'success',
        data: {
            tasks
        }
    });
});

exports.getTask = catchAsync(async (req, res, next) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return next(new AppError('No task found with that ID', 404))
    }

    res.status(200).json({
        status: 'success',
        data: {
            task
        }
    });
});

exports.setTaskIds = (req, res, next) => {
    if (!req.body.list) req.body.list = req.params.id;
    next();
};

exports.createTask = catchAsync(async (req, res, next) => {

    const newTask = await Task.create(req.body);
    res.status(201).json({
        status: 'success',
        data : {
            data: newTask
        }
    });   
});

exports.updateTask = service.updateOne(Task)

exports.deleteTask = service.deleteOne(Task)
