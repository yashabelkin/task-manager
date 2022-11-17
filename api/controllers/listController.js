const List = require('../models/listModel');
const service = require('./../services/handlerService');
const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync')

exports.getAllLists = catchAsync(async (req, res, next) => {
    
        const lists = await List.find();

        res.status(200).json({
            status: 'success',
            data: {
                lists
            }
        });
});

exports.getList = catchAsync(async (req, res, next) => {
        const list = await List.findById(req.params.id).populate('tasks');

        if (!list) {
            return next(new AppError('No list found with that ID', 404))
        }

        res.status(200).json({
            status: 'success',
            data: {
                list
            }
        });
});

exports.createList = service.createOne(List)

exports.updateList = service.updateOne(List)

exports.deleteList = service.deleteOne(List)
